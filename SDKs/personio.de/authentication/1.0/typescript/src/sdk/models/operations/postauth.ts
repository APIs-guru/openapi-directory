import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAuthQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=client_secret" })
  clientSecret: string;
}


export class PostAuthRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAuthQueryParams;
}


export class PostAuthResponse extends SpeakeasyBase {
  @Metadata()
  authenticationTokenResponse?: shared.AuthenticationTokenResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
