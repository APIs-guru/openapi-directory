import { SpeakeasyBase } from "../../../internal/utils";
import { SeldonMessage } from "./seldonmessage";
export declare class Feedback extends SpeakeasyBase {
    request?: SeldonMessage;
    response?: SeldonMessage;
    reward?: number;
    truth?: SeldonMessage;
}
