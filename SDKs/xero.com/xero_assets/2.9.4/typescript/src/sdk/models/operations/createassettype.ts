import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAssetTypeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class CreateAssetTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateAssetTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAssetTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AssetType;

  @Metadata()
  security: CreateAssetTypeSecurity;
}


export class CreateAssetTypeResponse extends SpeakeasyBase {
  @Metadata()
  assetType?: shared.AssetType;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
