import { Request, Response } from "express";

export const submitContactForm = (req: Request, res: Response) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }
    console.log("Form submitted:", { name, email, message });
    res.status(201).json({ message: "Message received" });
};