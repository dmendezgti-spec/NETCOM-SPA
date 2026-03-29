import type { APIRoute } from 'astro';

const requiredFields = ['name', 'company', 'email', 'phone', 'service', 'message'] as const;

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get('content-type') || '';

  let payload: Record<string, unknown> = {};

  if (contentType.includes('application/json')) {
    payload = await request.json();
  } else {
    const formData = await request.formData();
    payload = Object.fromEntries(formData.entries());
  }

  if (typeof payload.website === 'string' && payload.website.trim() !== '') {
    return Response.json({ ok: true, message: 'Solicitud recibida.' });
  }

  for (const field of requiredFields) {
    if (typeof payload[field] !== 'string' || payload[field].trim().length === 0) {
      return Response.json({ ok: false, message: 'Completa todos los campos obligatorios.' }, { status: 400 });
    }
  }

  if (!isValidEmail(String(payload.email))) {
    return Response.json({ ok: false, message: 'Ingresa un correo válido.' }, { status: 400 });
  }

  const webhookUrl = import.meta.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json(
      {
        ok: false,
        message: 'El formulario está operativo en interfaz, pero falta configurar CONTACT_WEBHOOK_URL para recibir leads en producción.',
      },
      { status: 503 },
    );
  }

  const leadPayload = {
    ...payload,
    source: 'netcom.cl',
    createdAt: new Date().toISOString(),
  };

  const webhookResponse = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(leadPayload),
  });

  if (!webhookResponse.ok) {
    return Response.json(
      {
        ok: false,
        message: 'La solicitud fue validada, pero el destino de integración no respondió correctamente.',
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true, message: 'Solicitud enviada correctamente. Te contactaremos a la brevedad.' });
};