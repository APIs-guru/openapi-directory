import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATERATEPLAN_SERVERS = [
	"https://wireless.twilio.com",
];



export class CreateRatePlanCreateRatePlanRequest extends SpeakeasyBase {
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

  @Metadata({ data: "form, name=InternationalRoamingDataLimit;" })
  internationalRoamingDataLimit?: number;

  @Metadata({ data: "form, name=MessagingEnabled;" })
  messagingEnabled?: boolean;

  @Metadata({ data: "form, name=NationalRoamingDataLimit;" })
  nationalRoamingDataLimit?: number;

  @Metadata({ data: "form, name=NationalRoamingEnabled;" })
  nationalRoamingEnabled?: boolean;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;

  @Metadata({ data: "form, name=VoiceEnabled;" })
  voiceEnabled?: boolean;
}


export class CreateRatePlanSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateRatePlanRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateRatePlanCreateRatePlanRequest;

  @Metadata()
  security: CreateRatePlanSecurity;
}


export class CreateRatePlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  wirelessV1RatePlan?: shared.WirelessV1RatePlan;
}
