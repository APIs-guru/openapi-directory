import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAssetTypesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetAssetTypesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAssetTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetAssetTypesHeaders;

  @SpeakeasyMetadata()
  security: GetAssetTypesSecurity;
}


export class GetAssetTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssetType })
  assetTypes?: shared.AssetType[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
