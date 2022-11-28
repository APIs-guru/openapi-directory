import { SpeakeasyBase } from "../../../internal/utils";
import { UserForApiContract } from "./userforapicontract";
export declare enum UserMessageContractInboxEnum {
    Nothing = "Nothing",
    Received = "Received",
    Sent = "Sent",
    Notifications = "Notifications"
}
export declare class UserMessageContract extends SpeakeasyBase {
    body?: string;
    createdFormatted?: string;
    highPriority?: boolean;
    id?: number;
    inbox?: UserMessageContractInboxEnum;
    read?: boolean;
    receiver?: UserForApiContract;
    sender?: UserForApiContract;
    subject?: string;
}
