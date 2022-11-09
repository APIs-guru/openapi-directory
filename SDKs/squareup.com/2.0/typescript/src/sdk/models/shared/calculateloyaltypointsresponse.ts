import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// CalculateLoyaltyPointsResponse
/** 
 * A response that includes the points that the buyer can earn from 
 * a specified purchase.
**/
export class CalculateLoyaltyPointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=points" })
  points?: number;
}
