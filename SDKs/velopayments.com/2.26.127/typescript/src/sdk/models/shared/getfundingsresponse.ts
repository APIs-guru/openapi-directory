import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FundingAudit } from "./fundingaudit";


// GetFundingsResponse
/** 
 * List Users Response Object
**/
export class GetFundingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.FundingAudit })
  content?: FundingAudit[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
