import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GenerateTokenV2RequestBodyGrantTypeEnum {
    UrnIetfParamsOauthGrantTypeJwtBearer = "urn:ietf:params:oauth:grant-type:jwt-bearer",
    RefreshToken = "refresh_token"
}


export class GenerateTokenV2RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=assertion;" })
  assertion?: string;

  @SpeakeasyMetadata({ data: "form, name=grant_type;" })
  grantType?: GenerateTokenV2RequestBodyGrantTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=refresh_token;" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "form, name=scope;" })
  scope?: string;

  @SpeakeasyMetadata({ data: "form, name=valid_for;" })
  validFor?: number;
}


export class GenerateTokenV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: GenerateTokenV2RequestBody;
}


export class GenerateTokenV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  generateAccessTokenResponse?: shared.GenerateAccessTokenResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
