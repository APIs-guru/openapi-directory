import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FundingPayorStatusAuditResponse } from "./fundingpayorstatusauditresponse";
import { LinkForResponse } from "./linkforresponse";
import { PageForResponse } from "./pageforresponse";


export class PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.FundingPayorStatusAuditResponse })
  content?: FundingPayorStatusAuditResponse[];

  @Metadata({ data: "json, name=links", elemType: shared.LinkForResponse })
  links?: LinkForResponse[];

  @Metadata({ data: "json, name=page" })
  page?: PageForResponse;
}
