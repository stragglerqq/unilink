export interface ConversationDto {
  messages: Message[]
}

export interface Message {
  authorId: number;
  timestamp: string;
  value: string;
}
