import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateInteractionChannelServerList = [
	"https://flex-api.twilio.com",
] as const;


export class UpdateInteractionChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateInteractionChannelUpdateInteractionChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Routing;" })
  routing?: any;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status: shared.InteractionChannelEnumStatusEnum;
}


export class UpdateInteractionChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateInteractionChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateInteractionChannelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateInteractionChannelUpdateInteractionChannelRequest;

  @SpeakeasyMetadata()
  security: UpdateInteractionChannelSecurity;
}


export class UpdateInteractionChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  flexV1InteractionInteractionChannel?: shared.FlexV1InteractionInteractionChannel;
}
