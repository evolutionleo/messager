export interface IJournalEntry {
    type: JournalEntryType;
    id: string;
    frequency: string;
    content: {
        title?: string;
        text: string;
    }
}

export type JournalEntryType = null|"text"|"poll"; // possibly add more in the future