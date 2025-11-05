import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ChevronRight } from "lucide-react";

const FreeInspectionModal = ({ isOpen, onOpenChange }) => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✅ Solicitud Enviada",
      description:
        "Hemos recibido tu solicitud de inspección gratuita. Nos pondremos en contacto contigo pronto.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] bg-white text-[var(--navy-blue)]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">
            Request a Free Inspection
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Complete the form to schedule a free inspection for your boat.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="border-gray-300 focus:ring-[var(--marine-turquoise)]"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  required
                  className="border-gray-300 focus:ring-[var(--marine-turquoise)]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="yachtName">Boat Name</Label>
                <Input
                  type="text"
                  id="yachtName"
                  placeholder="Example: 'M/Y Serenity'"
                  className="border-gray-300 focus:ring-[var(--marine-turquoise)]"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="yachtLength">LOA (feets)</Label>
                <Input
                  type="number"
                  id="yachtLength"
                  placeholder="Example: 80"
                  className="border-gray-300 focus:ring-[var(--marine-turquoise)]"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="location">Boat Location</Label>
              <Input
                type="text"
                id="location"
                placeholder="Example: Lauderdale Marine Center"
                required
                className="border-gray-300 focus:ring-[var(--marine-turquoise)]"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">
                What systems would you like us to inspect?
              </Label>
              <Textarea
                placeholder="Eexample: Hydraulic, Electrical, Generators..."
                id="message"
                required
                className="border-gray-300 focus:ring-[var(--marine-turquoise)]"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="btn-primary text-white w-full">
              Schedule Inspection <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FreeInspectionModal;
