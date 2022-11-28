import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthenticatePostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class AuthenticatePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AuthenticatePostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string;
}


export class AuthenticatePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
