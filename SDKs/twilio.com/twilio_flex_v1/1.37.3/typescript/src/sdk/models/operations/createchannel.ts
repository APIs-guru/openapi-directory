import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateChannelServerList = [
	"https://flex-api.twilio.com",
] as const;


export class CreateChannelCreateChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ChatFriendlyName;" })
  chatFriendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=ChatUniqueName;" })
  chatUniqueName?: string;

  @SpeakeasyMetadata({ data: "form, name=ChatUserFriendlyName;" })
  chatUserFriendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=FlexFlowSid;" })
  flexFlowSid: string;

  @SpeakeasyMetadata({ data: "form, name=Identity;" })
  identity: string;

  @SpeakeasyMetadata({ data: "form, name=LongLived;" })
  longLived?: boolean;

  @SpeakeasyMetadata({ data: "form, name=PreEngagementData;" })
  preEngagementData?: string;

  @SpeakeasyMetadata({ data: "form, name=Target;" })
  target?: string;

  @SpeakeasyMetadata({ data: "form, name=TaskAttributes;" })
  taskAttributes?: string;

  @SpeakeasyMetadata({ data: "form, name=TaskSid;" })
  taskSid?: string;
}


export class CreateChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateChannelCreateChannelRequest;

  @SpeakeasyMetadata()
  security: CreateChannelSecurity;
}


export class CreateChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  flexV1Channel?: shared.FlexV1Channel;
}
