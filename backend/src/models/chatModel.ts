import mongoose from "mongoose";

// Define the schema for individual messages
const messageSchema = new mongoose.Schema({
  ai: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: String,
    required: true,
    trim: true
  }
}, { _id: false });  // Prevents auto-generation of _id for messages

// Define the schema for each conversation session
const conversationSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now  // Stores the start date of the conversation
  },
  messages: {
    type: [messageSchema],  // Array of messages (ai-user pairs)
    default: []
  }
}, { _id: false });

// Define the main Chat schema
const chatSchema = new mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Auth',
    required: true,
    unique: true
  },
  prevChat: {
    type: [conversationSchema],  // Array of conversation sessions
    default: []
  }
});

export default mongoose.model("Chat", chatSchema);