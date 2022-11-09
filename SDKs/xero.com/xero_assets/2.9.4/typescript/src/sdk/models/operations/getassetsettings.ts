import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAssetSettingsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetAssetSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAssetSettingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAssetSettingsHeaders;

  @Metadata()
  security: GetAssetSettingsSecurity;
}


export class GetAssetSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  setting?: shared.Setting;

  @Metadata()
  statusCode: number;
}
