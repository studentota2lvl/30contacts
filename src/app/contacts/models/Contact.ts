export class Contact {
    id: number
    name: string
    surname: string
    email?: string
    phone?: string
    age?: number
}

export type Contacts = Contact[];