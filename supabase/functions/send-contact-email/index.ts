import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name: !!name, email: !!email, message: !!message });
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Sending confirmation email to:", email);

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: "Aroma Dorado <onboarding@resend.dev>",
      to: [email],
      subject: "¡Hemos recibido tu mensaje!",
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #5D4037; font-size: 28px; margin-bottom: 20px;">¡Gracias por contactarnos, ${name}!</h1>
          <p style="color: #6D4C41; font-size: 16px; line-height: 1.6;">
            Hemos recibido tu mensaje y te responderemos lo antes posible.
          </p>
          <p style="color: #6D4C41; font-size: 16px; line-height: 1.6;">
            Mientras tanto, ¿por qué no disfrutas de un buen café?
          </p>
          <hr style="border: none; border-top: 1px solid #D7CCC8; margin: 30px 0;" />
          <p style="color: #8D6E63; font-size: 14px;">
            Con cariño,<br />
            <strong>El equipo de Aroma Dorado</strong>
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    // Send notification email to admin (you can change this to your email)
    const notificationEmail = await resend.emails.send({
      from: "Aroma Dorado <onboarding@resend.dev>",
      to: ["hola@aromadorado.es"], // Change this to your actual email
      subject: `Nuevo mensaje de contacto: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #5D4037;">Nuevo mensaje de contacto</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Nombre:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Teléfono:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || "No proporcionado"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; vertical-align: top;">Mensaje:</td>
              <td style="padding: 10px;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    return new Response(
      JSON.stringify({ success: true, message: "Emails enviados correctamente" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
