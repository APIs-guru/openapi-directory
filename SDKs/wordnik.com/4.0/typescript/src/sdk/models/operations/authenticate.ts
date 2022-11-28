import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthenticatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class AuthenticateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=password" })
  password: string;
}


export class AuthenticateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AuthenticatePathParams;

  @SpeakeasyMetadata()
  queryParams: AuthenticateQueryParams;
}


export class AuthenticateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
