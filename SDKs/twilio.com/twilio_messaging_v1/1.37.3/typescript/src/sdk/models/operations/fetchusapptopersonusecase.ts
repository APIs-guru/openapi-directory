import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchUsAppToPersonUsecaseServerList = [
	"https://messaging.twilio.com",
] as const;


export class FetchUsAppToPersonUsecasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MessagingServiceSid" })
  messagingServiceSid: string;
}


export class FetchUsAppToPersonUsecaseQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BrandRegistrationSid" })
  brandRegistrationSid?: string;
}


export class FetchUsAppToPersonUsecaseSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchUsAppToPersonUsecaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchUsAppToPersonUsecasePathParams;

  @SpeakeasyMetadata()
  queryParams: FetchUsAppToPersonUsecaseQueryParams;

  @SpeakeasyMetadata()
  security: FetchUsAppToPersonUsecaseSecurity;
}


export class FetchUsAppToPersonUsecaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  messagingV1ServiceUsAppToPersonUsecase?: shared.MessagingV1ServiceUsAppToPersonUsecase;
}
