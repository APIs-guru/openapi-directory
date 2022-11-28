import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListFundingAuditDeltasQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedSince" })
  updatedSince: Date;
}


export class ListFundingAuditDeltasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListFundingAuditDeltasQueryParams;
}


export class ListFundingAuditDeltasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse?: shared.PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;
}
