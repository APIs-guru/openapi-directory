import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEUSAPPTOPERSON_SERVERS = [
	"https://messaging.twilio.com",
];



export class CreateUsAppToPersonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=MessagingServiceSid" })
  messagingServiceSid: string;
}


export class CreateUsAppToPersonCreateUsAppToPersonRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=BrandRegistrationSid;" })
  brandRegistrationSid: string;

  @Metadata({ data: "form, name=Description;" })
  description: string;

  @Metadata({ data: "form, name=HasEmbeddedLinks;" })
  hasEmbeddedLinks: boolean;

  @Metadata({ data: "form, name=HasEmbeddedPhone;" })
  hasEmbeddedPhone: boolean;

  @Metadata({ data: "form, name=MessageSamples;" })
  messageSamples: string[];

  @Metadata({ data: "form, name=UsAppToPersonUsecase;" })
  usAppToPersonUsecase: string;
}


export class CreateUsAppToPersonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUsAppToPersonRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateUsAppToPersonPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUsAppToPersonCreateUsAppToPersonRequest;

  @Metadata()
  security: CreateUsAppToPersonSecurity;
}


export class CreateUsAppToPersonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messagingV1ServiceUsAppToPerson?: shared.MessagingV1ServiceUsAppToPerson;
}
