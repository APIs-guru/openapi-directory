import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLoggedInUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class GetLoggedInUserRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetLoggedInUserHeaders;
}


export class GetLoggedInUserResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
