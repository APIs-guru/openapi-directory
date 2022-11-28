import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAuthQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client_secret" })
  clientSecret: string;
}


export class PostAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAuthQueryParams;
}


export class PostAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authenticationTokenResponse?: shared.AuthenticationTokenResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
