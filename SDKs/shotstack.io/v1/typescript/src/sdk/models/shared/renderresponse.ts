import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RenderResponseData } from "./renderresponsedata";



// RenderResponse
/** 
 * The response received after a [render status request](#get-render-status) is submitted. The response includes  details about status of a render and the output URL.
**/
export class RenderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response: RenderResponseData;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
