import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHUSAPPTOPERSONUSECASE_SERVERS = [
	"https://messaging.twilio.com",
];



export class FetchUsAppToPersonUsecasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=MessagingServiceSid" })
  messagingServiceSid: string;
}


export class FetchUsAppToPersonUsecaseQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=BrandRegistrationSid" })
  brandRegistrationSid?: string;
}


export class FetchUsAppToPersonUsecaseSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchUsAppToPersonUsecaseRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchUsAppToPersonUsecasePathParams;

  @Metadata()
  queryParams: FetchUsAppToPersonUsecaseQueryParams;

  @Metadata()
  security: FetchUsAppToPersonUsecaseSecurity;
}


export class FetchUsAppToPersonUsecaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messagingV1ServiceUsAppToPersonUsecase?: shared.MessagingV1ServiceUsAppToPersonUsecase;
}
