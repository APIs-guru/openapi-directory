import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RenderResponseData } from "./renderresponsedata";


// RenderResponse
/** 
 * The response received after a [render status request](#get-render-status) is submitted. The response includes  details about status of a render and the output URL.
**/
export class RenderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=response" })
  response: RenderResponseData;

  @Metadata({ data: "json, name=success" })
  success: boolean;
}
