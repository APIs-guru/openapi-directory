import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { LoyaltyProgram } from "./loyaltyprogram";


// RetrieveLoyaltyProgramResponse
/** 
 * A response that contains the loyalty program.
**/
export class RetrieveLoyaltyProgramResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=program" })
  program?: LoyaltyProgram;
}
