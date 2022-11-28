import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListIncomingPhoneNumberTollFreeServerList = [
	"https://api.twilio.com",
] as const;


export class ListIncomingPhoneNumberTollFreePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListIncomingPhoneNumberTollFreeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Beta" })
  beta?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Origin" })
  origin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" })
  phoneNumber?: string;
}


export class ListIncomingPhoneNumberTollFreeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=incoming_phone_numbers", elemType: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree })
  incomingPhoneNumbers?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree[];

  @SpeakeasyMetadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListIncomingPhoneNumberTollFreeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListIncomingPhoneNumberTollFreePathParams;

  @SpeakeasyMetadata()
  queryParams: ListIncomingPhoneNumberTollFreeQueryParams;

  @SpeakeasyMetadata()
  security: ListIncomingPhoneNumberTollFreeSecurity;
}


export class ListIncomingPhoneNumberTollFreeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listIncomingPhoneNumberTollFreeResponse?: ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
