import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWordListsForLoggedInUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;
}


export class GetWordListsForLoggedInUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class GetWordListsForLoggedInUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWordListsForLoggedInUserQueryParams;

  @SpeakeasyMetadata()
  headers: GetWordListsForLoggedInUserHeaders;
}


export class GetWordListsForLoggedInUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
