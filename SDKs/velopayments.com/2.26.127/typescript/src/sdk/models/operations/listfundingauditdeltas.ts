import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListFundingAuditDeltasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedSince" })
  updatedSince: Date;
}


export class ListFundingAuditDeltasRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListFundingAuditDeltasQueryParams;
}


export class ListFundingAuditDeltasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse?: shared.PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;
}
