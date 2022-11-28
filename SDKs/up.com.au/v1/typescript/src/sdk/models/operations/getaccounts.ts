import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize?: number;
}


export class GetAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAccountsQueryParams;
}


export class GetAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listAccountsResponse?: shared.ListAccountsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
