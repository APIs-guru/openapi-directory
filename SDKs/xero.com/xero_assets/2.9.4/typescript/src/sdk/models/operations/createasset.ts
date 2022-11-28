import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAssetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class CreateAssetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateAssetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAssetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Asset;

  @SpeakeasyMetadata()
  security: CreateAssetSecurity;
}


export class CreateAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asset?: shared.Asset;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
