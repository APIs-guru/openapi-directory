import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAssetTypesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetAssetTypesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAssetTypesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAssetTypesHeaders;

  @Metadata()
  security: GetAssetTypesSecurity;
}


export class GetAssetTypesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AssetType })
  assetTypes?: shared.AssetType[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
