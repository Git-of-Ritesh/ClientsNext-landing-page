"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const JoinWaitlistCTA = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("https://formspree.io/f/manovzqq", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email}),
    });

    if(res.ok){
        setIsLoading(false);
        toast("You've been added to the waitlist!");
        setEmail("");
    }
    else{
        setIsLoading(false);
        toast("Error occoured");
        setEmail("");
    }
  };

  return (
    <section id="JoinWaitlist" className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Ready to transform your client relationships?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Join our waitlist today and be the first to access our powerful CRM solution
          when we launch.
        </p>
        
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            className="bg-primary hover:bg-primary/90 text-white px-6"
            disabled={isLoading}
          >
            {isLoading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default JoinWaitlistCTA;