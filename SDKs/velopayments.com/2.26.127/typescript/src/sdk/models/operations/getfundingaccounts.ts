import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFundingAccountsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceAccountId" })
  sourceAccountId?: string;
}


export class GetFundingAccountsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFundingAccountsQueryParams;
}


export class GetFundingAccountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFundingAccountsResponse?: shared.ListFundingAccountsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse403?: any;
}
