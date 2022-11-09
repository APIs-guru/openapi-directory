import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthenticatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class AuthenticateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=password" })
  password: string;
}


export class AuthenticateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthenticatePathParams;

  @Metadata()
  queryParams: AuthenticateQueryParams;
}


export class AuthenticateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
