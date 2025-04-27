import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDealerApplicationSchema, insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for dealer applications
  app.post("/api/dealer-applications", async (req, res) => {
    try {
      const validatedData = insertDealerApplicationSchema.parse(req.body);
      const newApplication = await storage.createDealerApplication(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Application submitted successfully!", 
        data: newApplication 
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Invalid application data", 
          errors: validationError.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  app.get("/api/dealer-applications", async (req, res) => {
    try {
      const applications = await storage.getDealerApplications();
      res.status(200).json({ 
        success: true, 
        data: applications 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve applications" 
      });
    }
  });

  app.get("/api/dealer-applications/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid ID format" 
        });
      }

      const application = await storage.getDealerApplicationById(id);
      if (!application) {
        return res.status(404).json({ 
          success: false, 
          message: "Application not found" 
        });
      }

      res.status(200).json({ 
        success: true, 
        data: application 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve application" 
      });
    }
  });

  // API routes for contact messages
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const newMessage = await storage.createContactMessage(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Message sent successfully!", 
        data: newMessage 
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Invalid message data", 
          errors: validationError.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json({ 
        success: true, 
        data: messages 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve messages" 
      });
    }
  });

  app.get("/api/contact/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid ID format" 
        });
      }

      const message = await storage.getContactMessageById(id);
      if (!message) {
        return res.status(404).json({ 
          success: false, 
          message: "Message not found" 
        });
      }

      res.status(200).json({ 
        success: true, 
        data: message 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve message" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
