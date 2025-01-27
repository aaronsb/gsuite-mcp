export interface GetEmailsParams {
  email: string;
  query?: string;
  maxResults?: number;
  labelIds?: string[];
}

export interface SendEmailParams {
  email: string;
  to: string[];
  subject: string;
  body: string;
  cc?: string[];
  bcc?: string[];
}

export interface EmailResponse {
  id: string;
  threadId: string;
  labelIds?: string[];
  snippet?: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  body: string;
}

export interface SendEmailResponse {
  messageId: string;
  threadId: string;
  labelIds?: string[];
}

export interface GmailModuleConfig {
  requiredScopes?: string[];
}

import { GMAIL_SCOPES } from '../../common/scopes.js';

export const DEFAULT_GMAIL_SCOPES = GMAIL_SCOPES;

export class GmailError extends Error {
  constructor(
    message: string,
    public code: string,
    public resolution: string
  ) {
    super(message);
    this.name = 'GmailError';
  }
}
