import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  const getSocialIcon = (platform: string) => {
    const icons: Record<string, string> = {
      linkedin: "fab fa-linkedin-in",
      twitter: "fab fa-twitter",
      dribbble: "fab fa-dribbble",
      github: "fab fa-github",
      behance: "fab fa-behance",
      instagram: "fab fa-instagram"
    };
    return icons[platform] || "fas fa-link";
  };

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creative professionals passionate about delivering exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-[#00DDEB] font-semibold mb-3">{member.role}</p>
              <div className="flex justify-center space-x-3">
                {Object.entries(member.socialLinks).map(([platform, url]) => (
                  <motion.a
                    key={platform}
                    href={url}
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-gradient-to-r from-[#00DDEB] to-[#8B5CF6] rounded-full flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className={`${getSocialIcon(platform)} text-white text-sm`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Member Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-md">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="text-center">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  {selectedMember.name}
                </DialogTitle>
              </DialogHeader>
              <div className="text-center">
                <p className="text-[#00DDEB] font-semibold mb-4">{selectedMember.role}</p>
                <p className="text-muted-foreground mb-6">{selectedMember.bio}</p>
                <div className="flex justify-center space-x-3">
                  {Object.entries(selectedMember.socialLinks).map(([platform, url]) => (
                    <Button
                      key={platform}
                      size="sm"
                      variant="outline"
                      asChild
                      className="w-10 h-10 p-0"
                    >
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        <i className={`${getSocialIcon(platform)} text-sm`}></i>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
