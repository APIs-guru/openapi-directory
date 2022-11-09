import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RevokeRefreshTokenV2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class RevokeRefreshTokenV2Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class RevokeRefreshTokenV2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: RevokeRefreshTokenV2PathParams;

  @Metadata()
  security: RevokeRefreshTokenV2Security;
}


export class RevokeRefreshTokenV2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
