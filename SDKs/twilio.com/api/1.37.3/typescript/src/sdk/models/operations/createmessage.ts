import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateMessageServerList = [
	"https://api.twilio.com",
] as const;


export class CreateMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class CreateMessageCreateMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AddressRetention;" })
  addressRetention?: shared.MessageEnumAddressRetentionEnum;

  @SpeakeasyMetadata({ data: "form, name=ApplicationSid;" })
  applicationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Attempt;" })
  attempt?: number;

  @SpeakeasyMetadata({ data: "form, name=Body;" })
  body?: string;

  @SpeakeasyMetadata({ data: "form, name=ContentRetention;" })
  contentRetention?: shared.MessageEnumContentRetentionEnum;

  @SpeakeasyMetadata({ data: "form, name=ContentSid;" })
  contentSid?: string;

  @SpeakeasyMetadata({ data: "form, name=ContentVariables;" })
  contentVariables?: string;

  @SpeakeasyMetadata({ data: "form, name=ForceDelivery;" })
  forceDelivery?: boolean;

  @SpeakeasyMetadata({ data: "form, name=From;" })
  from?: string;

  @SpeakeasyMetadata({ data: "form, name=MaxPrice;" })
  maxPrice?: number;

  @SpeakeasyMetadata({ data: "form, name=MediaUrl;" })
  mediaUrl?: string[];

  @SpeakeasyMetadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid?: string;

  @SpeakeasyMetadata({ data: "form, name=PersistentAction;" })
  persistentAction?: string[];

  @SpeakeasyMetadata({ data: "form, name=ProvideFeedback;" })
  provideFeedback?: boolean;

  @SpeakeasyMetadata({ data: "form, name=ScheduleType;" })
  scheduleType?: shared.MessageEnumScheduleTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=SendAsMms;" })
  sendAsMms?: boolean;

  @SpeakeasyMetadata({ data: "form, name=SendAt;" })
  sendAt?: Date;

  @SpeakeasyMetadata({ data: "form, name=ShortenUrls;" })
  shortenUrls?: boolean;

  @SpeakeasyMetadata({ data: "form, name=SmartEncoded;" })
  smartEncoded?: boolean;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=To;" })
  to: string;

  @SpeakeasyMetadata({ data: "form, name=ValidityPeriod;" })
  validityPeriod?: number;
}


export class CreateMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateMessagePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateMessageCreateMessageRequest;

  @SpeakeasyMetadata()
  security: CreateMessageSecurity;
}


export class CreateMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountMessage?: shared.ApiV2010AccountMessage;
}
