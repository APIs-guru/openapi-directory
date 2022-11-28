import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FundingPayorStatusAuditResponse } from "./fundingpayorstatusauditresponse";
import { LinkForResponse } from "./linkforresponse";
import { PageForResponse } from "./pageforresponse";



export class PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: FundingPayorStatusAuditResponse })
  content?: FundingPayorStatusAuditResponse[];

  @SpeakeasyMetadata({ data: "json, name=links", elemType: LinkForResponse })
  links?: LinkForResponse[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: PageForResponse;
}
