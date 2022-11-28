import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RevokeRefreshTokenV2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class RevokeRefreshTokenV2Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class RevokeRefreshTokenV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RevokeRefreshTokenV2PathParams;

  @SpeakeasyMetadata()
  security: RevokeRefreshTokenV2Security;
}


export class RevokeRefreshTokenV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
