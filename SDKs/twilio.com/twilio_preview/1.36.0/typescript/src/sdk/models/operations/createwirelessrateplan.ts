import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEWIRELESSRATEPLAN_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateWirelessRatePlanCreateWirelessRatePlanRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CommandsEnabled;" })
  commandsEnabled?: boolean;

  @Metadata({ data: "form, name=DataEnabled;" })
  dataEnabled?: boolean;

  @Metadata({ data: "form, name=DataLimit;" })
  dataLimit?: number;

  @Metadata({ data: "form, name=DataMetering;" })
  dataMetering?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=InternationalRoaming;" })
  internationalRoaming?: string[];

  @Metadata({ data: "form, name=MessagingEnabled;" })
  messagingEnabled?: boolean;

  @Metadata({ data: "form, name=NationalRoamingEnabled;" })
  nationalRoamingEnabled?: boolean;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;

  @Metadata({ data: "form, name=VoiceEnabled;" })
  voiceEnabled?: boolean;
}


export class CreateWirelessRatePlanSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateWirelessRatePlanRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateWirelessRatePlanCreateWirelessRatePlanRequest;

  @Metadata()
  security: CreateWirelessRatePlanSecurity;
}


export class CreateWirelessRatePlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewWirelessRatePlan?: shared.PreviewWirelessRatePlan;
}
