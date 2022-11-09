import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWordListsForLoggedInUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;
}


export class GetWordListsForLoggedInUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class GetWordListsForLoggedInUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWordListsForLoggedInUserQueryParams;

  @Metadata()
  headers: GetWordListsForLoggedInUserHeaders;
}


export class GetWordListsForLoggedInUserResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
