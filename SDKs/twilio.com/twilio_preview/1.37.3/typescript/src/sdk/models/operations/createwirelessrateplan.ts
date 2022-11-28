import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateWirelessRatePlanServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateWirelessRatePlanCreateWirelessRatePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CommandsEnabled;" })
  commandsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=DataEnabled;" })
  dataEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=DataLimit;" })
  dataLimit?: number;

  @SpeakeasyMetadata({ data: "form, name=DataMetering;" })
  dataMetering?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=InternationalRoaming;" })
  internationalRoaming?: string[];

  @SpeakeasyMetadata({ data: "form, name=MessagingEnabled;" })
  messagingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=NationalRoamingEnabled;" })
  nationalRoamingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceEnabled;" })
  voiceEnabled?: boolean;
}


export class CreateWirelessRatePlanSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateWirelessRatePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateWirelessRatePlanCreateWirelessRatePlanRequest;

  @SpeakeasyMetadata()
  security: CreateWirelessRatePlanSecurity;
}


export class CreateWirelessRatePlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewWirelessRatePlan?: shared.PreviewWirelessRatePlan;
}
