import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEMESSAGE_SERVERS = [
	"https://api.twilio.com",
];



export class CreateMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class CreateMessageCreateMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AddressRetention;" })
  addressRetention?: shared.MessageEnumAddressRetentionEnum;

  @Metadata({ data: "form, name=ApplicationSid;" })
  applicationSid?: string;

  @Metadata({ data: "form, name=Attempt;" })
  attempt?: number;

  @Metadata({ data: "form, name=Body;" })
  body?: string;

  @Metadata({ data: "form, name=ContentRetention;" })
  contentRetention?: shared.MessageEnumContentRetentionEnum;

  @Metadata({ data: "form, name=ForceDelivery;" })
  forceDelivery?: boolean;

  @Metadata({ data: "form, name=From;" })
  from?: string;

  @Metadata({ data: "form, name=MaxPrice;" })
  maxPrice?: number;

  @Metadata({ data: "form, name=MediaUrl;" })
  mediaUrl?: string[];

  @Metadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid?: string;

  @Metadata({ data: "form, name=PersistentAction;" })
  persistentAction?: string[];

  @Metadata({ data: "form, name=ProvideFeedback;" })
  provideFeedback?: boolean;

  @Metadata({ data: "form, name=ScheduleType;" })
  scheduleType?: shared.MessageEnumScheduleTypeEnum;

  @Metadata({ data: "form, name=SendAsMms;" })
  sendAsMms?: boolean;

  @Metadata({ data: "form, name=SendAt;" })
  sendAt?: Date;

  @Metadata({ data: "form, name=SmartEncoded;" })
  smartEncoded?: boolean;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=To;" })
  to: string;

  @Metadata({ data: "form, name=ValidityPeriod;" })
  validityPeriod?: number;
}


export class CreateMessageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateMessageRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateMessagePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateMessageCreateMessageRequest;

  @Metadata()
  security: CreateMessageSecurity;
}


export class CreateMessageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountMessage?: shared.ApiV2010AccountMessage;
}
