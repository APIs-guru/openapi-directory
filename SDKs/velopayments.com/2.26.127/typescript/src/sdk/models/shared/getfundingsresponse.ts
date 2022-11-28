import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FundingAudit } from "./fundingaudit";



// GetFundingsResponse
/** 
 * List Users Response Object
**/
export class GetFundingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: FundingAudit })
  content?: FundingAudit[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
