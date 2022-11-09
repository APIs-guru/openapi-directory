import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { LoyaltyProgram } from "./loyaltyprogram";


// ListLoyaltyProgramsResponse
/** 
 * A response that contains all loyalty programs.
**/
export class ListLoyaltyProgramsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=programs", elemType: shared.LoyaltyProgram })
  programs?: LoyaltyProgram[];
}
