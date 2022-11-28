import { SpeakeasyBase } from "../../../internal/utils";
import { RenderResponseData } from "./renderresponsedata";
/**
 * The response received after a [render status request](#get-render-status) is submitted. The response includes  details about status of a render and the output URL.
**/
export declare class RenderResponse extends SpeakeasyBase {
    message: string;
    response: RenderResponseData;
    success: boolean;
}
