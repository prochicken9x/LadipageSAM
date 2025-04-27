import { 
  dealerApplications, 
  type DealerApplication, 
  type InsertDealerApplication,
  contactMessages,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  // Dealer applications
  createDealerApplication(application: InsertDealerApplication): Promise<DealerApplication>;
  getDealerApplications(): Promise<DealerApplication[]>;
  getDealerApplicationById(id: number): Promise<DealerApplication | undefined>;
  
  // Contact messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessageById(id: number): Promise<ContactMessage | undefined>;
}

export class MemStorage implements IStorage {
  private dealerApplications: Map<number, DealerApplication>;
  private contactMessages: Map<number, ContactMessage>;
  private dealerApplicationIdCounter: number;
  private contactMessageIdCounter: number;

  constructor() {
    this.dealerApplications = new Map();
    this.contactMessages = new Map();
    this.dealerApplicationIdCounter = 1;
    this.contactMessageIdCounter = 1;
  }

  async createDealerApplication(application: InsertDealerApplication): Promise<DealerApplication> {
    const id = this.dealerApplicationIdCounter++;
    const newApplication: DealerApplication = { 
      ...application, 
      id,
      status: "pending"
    };
    this.dealerApplications.set(id, newApplication);
    return newApplication;
  }

  async getDealerApplications(): Promise<DealerApplication[]> {
    return Array.from(this.dealerApplications.values());
  }

  async getDealerApplicationById(id: number): Promise<DealerApplication | undefined> {
    return this.dealerApplications.get(id);
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageIdCounter++;
    const newMessage: ContactMessage = { 
      ...message, 
      id,
      status: "unread" 
    };
    this.contactMessages.set(id, newMessage);
    return newMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async getContactMessageById(id: number): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }
}

export const storage = new MemStorage();
