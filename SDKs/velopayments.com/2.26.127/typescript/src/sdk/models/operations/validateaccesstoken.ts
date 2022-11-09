import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValidateAccessTokenHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization?: string;
}


export class ValidateAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  headers: ValidateAccessTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AccessTokenValidationRequest;
}


export class ValidateAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  accessTokenResponse?: shared.AccessTokenResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;
}
