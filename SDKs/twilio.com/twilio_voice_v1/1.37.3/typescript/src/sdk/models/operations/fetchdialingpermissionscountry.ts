import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchDialingPermissionsCountryServerList = [
	"https://voice.twilio.com",
] as const;


export class FetchDialingPermissionsCountryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IsoCode" })
  isoCode: string;
}


export class FetchDialingPermissionsCountrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchDialingPermissionsCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchDialingPermissionsCountryPathParams;

  @SpeakeasyMetadata()
  security: FetchDialingPermissionsCountrySecurity;
}


export class FetchDialingPermissionsCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voiceV1DialingPermissionsDialingPermissionsCountryInstance?: shared.VoiceV1DialingPermissionsDialingPermissionsCountryInstance;
}
