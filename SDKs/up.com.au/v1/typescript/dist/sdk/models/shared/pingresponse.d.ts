import { SpeakeasyBase } from "../../../internal/utils";
export declare class PingResponseMeta extends SpeakeasyBase {
    id: string;
    statusEmoji: string;
}
/**
 * Basic ping response to verify authentication.
 *
**/
export declare class PingResponse extends SpeakeasyBase {
    meta: PingResponseMeta;
}
