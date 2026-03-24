import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const OWNER_EMAIL = "vigneshwarasafetynets9071@gmail.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message } = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1B5E20, #2E7D32); padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">🔔 New Enquiry Received</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0; font-size: 14px;">Vigneshwara Safety Nets</p>
        </div>
        <div style="border: 1px solid #e0e0e0; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333; width: 100px; vertical-align: top;">Name:</td>
              <td style="padding: 10px 0; color: #555;">${name}</td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Email:</td>
              <td style="padding: 10px 0; color: #555;"><a href="mailto:${email}" style="color: #1B5E20;">${email}</a></td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Phone:</td>
              <td style="padding: 10px 0; color: #555;"><a href="tel:${phone}" style="color: #1B5E20;">${phone}</a></td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0; color: #555;">${message}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
          <p style="font-size: 12px; color: #999; margin: 0;">This email was sent automatically from your website contact form.</p>
        </div>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Vigneshwara Safety Nets <onboarding@resend.dev>",
        to: [OWNER_EMAIL],
        subject: `New Enquiry from ${name}`,
        html: emailHtml,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      throw new Error(data.message || "Failed to send email");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
