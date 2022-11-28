import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetSettingsHeaders;

  @SpeakeasyMetadata()
  security: GetSettingsSecurity;
}


export class GetSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  settingsObject?: shared.SettingsObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
