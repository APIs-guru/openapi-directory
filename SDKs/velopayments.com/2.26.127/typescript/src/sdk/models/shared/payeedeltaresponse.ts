import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PayeeDelta } from "./payeedelta";


// PayeeDeltaResponse
/** 
 * List Payee Changes Response Object
**/
export class PayeeDeltaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.PayeeDelta })
  content?: PayeeDelta[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
