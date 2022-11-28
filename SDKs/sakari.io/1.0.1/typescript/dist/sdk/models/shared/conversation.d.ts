import { SpeakeasyBase } from "../../../internal/utils";
import { ContactIdentifiers } from "./contactidentifiers";
import { Updated } from "./updated";
import { Message } from "./message";
import { PhoneNumber } from "./phonenumber";
export declare class Conversation extends SpeakeasyBase {
    closed?: boolean;
    contact?: ContactIdentifiers;
    created?: Updated;
    id?: string;
    lastMessage?: Message;
    phoneNumber?: PhoneNumber;
    unread?: string[];
    updated?: Updated;
}
