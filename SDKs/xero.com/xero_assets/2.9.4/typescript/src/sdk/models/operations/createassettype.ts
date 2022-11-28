import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAssetTypeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class CreateAssetTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateAssetTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAssetTypeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AssetType;

  @SpeakeasyMetadata()
  security: CreateAssetTypeSecurity;
}


export class CreateAssetTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetType?: shared.AssetType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
