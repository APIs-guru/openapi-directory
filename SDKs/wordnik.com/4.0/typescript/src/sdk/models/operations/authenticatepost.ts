import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthenticatePostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class AuthenticatePostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthenticatePostPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: string;
}


export class AuthenticatePostResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
