import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSourceAccountsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=physicalAccountName" })
  physicalAccountName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetSourceAccountsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSourceAccountsQueryParams;
}


export class GetSourceAccountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSourceAccountResponse?: shared.ListSourceAccountResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse401?: any;
}
