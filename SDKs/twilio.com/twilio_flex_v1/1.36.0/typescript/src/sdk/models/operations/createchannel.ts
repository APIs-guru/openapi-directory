import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
];



export class CreateChannelCreateChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ChatFriendlyName;" })
  chatFriendlyName: string;

  @Metadata({ data: "form, name=ChatUniqueName;" })
  chatUniqueName?: string;

  @Metadata({ data: "form, name=ChatUserFriendlyName;" })
  chatUserFriendlyName: string;

  @Metadata({ data: "form, name=FlexFlowSid;" })
  flexFlowSid: string;

  @Metadata({ data: "form, name=Identity;" })
  identity: string;

  @Metadata({ data: "form, name=LongLived;" })
  longLived?: boolean;

  @Metadata({ data: "form, name=PreEngagementData;" })
  preEngagementData?: string;

  @Metadata({ data: "form, name=Target;" })
  target?: string;

  @Metadata({ data: "form, name=TaskAttributes;" })
  taskAttributes?: string;

  @Metadata({ data: "form, name=TaskSid;" })
  taskSid?: string;
}


export class CreateChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateChannelCreateChannelRequest;

  @Metadata()
  security: CreateChannelSecurity;
}


export class CreateChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  flexV1Channel?: shared.FlexV1Channel;
}
