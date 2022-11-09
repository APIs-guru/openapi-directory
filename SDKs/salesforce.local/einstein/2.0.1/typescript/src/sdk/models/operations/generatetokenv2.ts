import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GenerateTokenV2RequestBodyGrantTypeEnum {
    UrnIetfParamsOauthGrantTypeJwtBearer = "urn:ietf:params:oauth:grant-type:jwt-bearer"
,    RefreshToken = "refresh_token"
}


export class GenerateTokenV2RequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=assertion;" })
  assertion?: string;

  @Metadata({ data: "form, name=grant_type;" })
  grantType?: GenerateTokenV2RequestBodyGrantTypeEnum;

  @Metadata({ data: "form, name=refresh_token;" })
  refreshToken?: string;

  @Metadata({ data: "form, name=scope;" })
  scope?: string;

  @Metadata({ data: "form, name=valid_for;" })
  validFor?: number;
}


export class GenerateTokenV2Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: GenerateTokenV2RequestBody;
}


export class GenerateTokenV2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  generateAccessTokenResponse?: shared.GenerateAccessTokenResponse;

  @Metadata()
  statusCode: number;
}
