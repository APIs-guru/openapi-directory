import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLoggedInUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=auth_token" })
  authToken: string;
}


export class GetLoggedInUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetLoggedInUserHeaders;
}


export class GetLoggedInUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
