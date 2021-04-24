export interface IJournalEntry {
    type: JournalEntryType;
    title?: string;
    content: {
        text: string;
    }
}

export type JournalEntryType = null|"text"|"poll"; // possibly add more in the future