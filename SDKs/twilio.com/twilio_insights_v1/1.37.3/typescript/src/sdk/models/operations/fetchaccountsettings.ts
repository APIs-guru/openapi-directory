import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchAccountSettingsServerList = [
	"https://insights.twilio.com",
] as const;


export class FetchAccountSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubaccountSid" })
  subaccountSid?: string;
}


export class FetchAccountSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchAccountSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: FetchAccountSettingsQueryParams;

  @SpeakeasyMetadata()
  security: FetchAccountSettingsSecurity;
}


export class FetchAccountSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  insightsV1AccountSettings?: shared.InsightsV1AccountSettings;
}
