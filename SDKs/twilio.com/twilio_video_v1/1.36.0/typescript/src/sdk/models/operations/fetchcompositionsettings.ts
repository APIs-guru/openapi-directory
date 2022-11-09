import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHCOMPOSITIONSETTINGS_SERVERS = [
	"https://video.twilio.com",
];



export class FetchCompositionSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchCompositionSettingsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  security: FetchCompositionSettingsSecurity;
}


export class FetchCompositionSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1CompositionSettings?: shared.VideoV1CompositionSettings;
}
