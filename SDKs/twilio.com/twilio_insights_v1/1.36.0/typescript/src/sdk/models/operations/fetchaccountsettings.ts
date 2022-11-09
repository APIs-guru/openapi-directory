import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHACCOUNTSETTINGS_SERVERS = [
	"https://insights.twilio.com",
];



export class FetchAccountSettingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=SubaccountSid" })
  subaccountSid?: string;
}


export class FetchAccountSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchAccountSettingsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: FetchAccountSettingsQueryParams;

  @Metadata()
  security: FetchAccountSettingsSecurity;
}


export class FetchAccountSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  insightsV1AccountSettings?: shared.InsightsV1AccountSettings;
}
