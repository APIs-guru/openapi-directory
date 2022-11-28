import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Imideate response for long running api call.
 *
**/
export declare class StatusDto extends SpeakeasyBase {
    messageId?: string;
    statusText?: string;
    url?: string;
}
