import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import heroBg from "@/assets/hero-bg1.jpeg";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9449 225 472", "+91 7892 964 577"],
    action: "tel:+919449225472",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@vigneshwarasafetynets9071@gmail.com"],
    action: "mailto:info@vigneshwarasafetynets9071@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["Hospet, Karnataka"],
    action: "#",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Sat: 9AM - 7PM", "Sun: 10AM - 4PM"],
    action: "#",
  },
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z
    .string()
    .trim()
    .min(10, "Phone must be 10+ digits")
    .max(15)
    .regex(/^[0-9+\-\s()]+$/),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validation = schema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: "Validation Error",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const { error: dbError } = await supabase.from("enquiries").insert([
        {
          name: validation.data.name,
          email: validation.data.email,
          phone: validation.data.phone,
          message: validation.data.message,
        },
      ]);
      if (dbError) throw dbError;

      // Send email notification to owner
      await supabase.functions.invoke("send-enquiry-email", {
        body: {
          name: validation.data.name,
          email: validation.data.email,
          phone: validation.data.phone,
          message: validation.data.message,
        },
      });

      toast({
        title: "Enquiry Submitted!",
        description: "Our team will contact you shortly.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-primary-foreground/70">
              Get a free site visit and quote from our experts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-xl border border-border p-7 shadow-card">
                <h2 className="text-xl font-display font-bold text-foreground mb-1">
                  Send a Message
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  We'll respond within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-xs">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="email" className="text-xs">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={255}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-xs">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        maxLength={15}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-xs">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      maxLength={1000}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full gradient-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-1.5" /> Submit Enquiry
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div>
                <h2 className="text-xl font-display font-bold text-foreground mb-1">
                  Contact Info
                </h2>
                <p className="text-sm text-muted-foreground">
                  Reach us through any channel.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.action}
                    className="block p-4 bg-card rounded-lg border border-border hover:shadow-card-hover transition-shadow"
                  >
                    <div className="w-9 h-9 gradient-primary rounded-md flex items-center justify-center mb-3">
                      <info.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                      {info.title}
                    </h3>
                    {info.details.map((d) => (
                      <p
                        key={d}
                        className="text-xs text-muted-foreground break-words"
                      >
                        {d}
                      </p>
                    ))}
                  </a>
                ))}
              </div>
              <div className="bg-muted rounded-lg overflow-hidden h-52">
                <iframe
                  src="https://www.google.com/maps?q=Hospet,Karnataka&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
