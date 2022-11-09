import { SpeakeasyBase } from "../../../internal/utils/utils";
import { QueuedResponseData } from "./queuedresponsedata";
/**
 * The response received after a [render request](#render-asset) is submitted. The render task is queued for rendering and a unique render id is returned.
**/
export declare class QueuedResponse extends SpeakeasyBase {
    message: string;
    response: QueuedResponseData;
    success: boolean;
}
