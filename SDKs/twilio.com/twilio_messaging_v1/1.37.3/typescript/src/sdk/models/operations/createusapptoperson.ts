import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateUsAppToPersonServerList = [
	"https://messaging.twilio.com",
] as const;


export class CreateUsAppToPersonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MessagingServiceSid" })
  messagingServiceSid: string;
}


export class CreateUsAppToPersonCreateUsAppToPersonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=BrandRegistrationSid;" })
  brandRegistrationSid: string;

  @SpeakeasyMetadata({ data: "form, name=Description;" })
  description: string;

  @SpeakeasyMetadata({ data: "form, name=HasEmbeddedLinks;" })
  hasEmbeddedLinks: boolean;

  @SpeakeasyMetadata({ data: "form, name=HasEmbeddedPhone;" })
  hasEmbeddedPhone: boolean;

  @SpeakeasyMetadata({ data: "form, name=HelpKeywords;" })
  helpKeywords?: string[];

  @SpeakeasyMetadata({ data: "form, name=HelpMessage;" })
  helpMessage?: string;

  @SpeakeasyMetadata({ data: "form, name=MessageFlow;" })
  messageFlow?: string;

  @SpeakeasyMetadata({ data: "form, name=MessageSamples;" })
  messageSamples: string[];

  @SpeakeasyMetadata({ data: "form, name=OptInKeywords;" })
  optInKeywords?: string[];

  @SpeakeasyMetadata({ data: "form, name=OptInMessage;" })
  optInMessage?: string;

  @SpeakeasyMetadata({ data: "form, name=OptOutKeywords;" })
  optOutKeywords?: string[];

  @SpeakeasyMetadata({ data: "form, name=OptOutMessage;" })
  optOutMessage?: string;

  @SpeakeasyMetadata({ data: "form, name=UsAppToPersonUsecase;" })
  usAppToPersonUsecase: string;
}


export class CreateUsAppToPersonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUsAppToPersonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateUsAppToPersonPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUsAppToPersonCreateUsAppToPersonRequest;

  @SpeakeasyMetadata()
  security: CreateUsAppToPersonSecurity;
}


export class CreateUsAppToPersonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  messagingV1ServiceUsAppToPerson?: shared.MessagingV1ServiceUsAppToPerson;
}
