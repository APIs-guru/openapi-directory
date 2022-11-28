import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValidateAccessTokenHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization?: string;
}


export class ValidateAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ValidateAccessTokenHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AccessTokenValidationRequest;
}


export class ValidateAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessTokenResponse?: shared.AccessTokenResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;
}
