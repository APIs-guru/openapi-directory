import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAssetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class CreateAssetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateAssetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAssetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Asset;

  @Metadata()
  security: CreateAssetSecurity;
}


export class CreateAssetResponse extends SpeakeasyBase {
  @Metadata()
  asset?: shared.Asset;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
