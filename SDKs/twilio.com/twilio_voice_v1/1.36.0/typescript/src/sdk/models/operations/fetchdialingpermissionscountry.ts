import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHDIALINGPERMISSIONSCOUNTRY_SERVERS = [
	"https://voice.twilio.com",
];



export class FetchDialingPermissionsCountryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IsoCode" })
  isoCode: string;
}


export class FetchDialingPermissionsCountrySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchDialingPermissionsCountryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchDialingPermissionsCountryPathParams;

  @Metadata()
  security: FetchDialingPermissionsCountrySecurity;
}


export class FetchDialingPermissionsCountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voiceV1DialingPermissionsDialingPermissionsCountryInstance?: shared.VoiceV1DialingPermissionsDialingPermissionsCountryInstance;
}
