import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAssetSettingsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetAssetSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAssetSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetAssetSettingsHeaders;

  @SpeakeasyMetadata()
  security: GetAssetSettingsSecurity;
}


export class GetAssetSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  setting?: shared.Setting;

  @SpeakeasyMetadata()
  statusCode: number;
}
