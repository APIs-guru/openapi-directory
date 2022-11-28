import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSourceAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=physicalAccountName" })
  physicalAccountName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetSourceAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSourceAccountsQueryParams;
}


export class GetSourceAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSourceAccountResponse?: shared.ListSourceAccountResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse401?: any;
}
