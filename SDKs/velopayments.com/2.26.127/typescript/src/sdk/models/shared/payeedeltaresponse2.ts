import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PayeeDelta2 } from "./payeedelta2";


// PayeeDeltaResponse2
/** 
 * List Payee Changes Response Object
**/
export class PayeeDeltaResponse2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.PayeeDelta2 })
  content?: PayeeDelta2[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
