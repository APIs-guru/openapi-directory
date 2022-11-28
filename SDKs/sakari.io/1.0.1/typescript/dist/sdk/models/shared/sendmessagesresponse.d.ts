import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
export declare class SendMessagesResponseData extends SpeakeasyBase {
    estimatedPrice?: number;
    jobId?: string;
    messages?: Message[];
    queued?: number;
}
export declare class SendMessagesResponse extends SpeakeasyBase {
    data?: SendMessagesResponseData;
}
