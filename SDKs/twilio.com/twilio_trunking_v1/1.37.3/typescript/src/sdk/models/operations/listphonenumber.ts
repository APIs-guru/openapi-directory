import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListPhoneNumberServerList = [
	"https://trunking.twilio.com",
] as const;


export class ListPhoneNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class ListPhoneNumberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListPhoneNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListPhoneNumberListPhoneNumberResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListPhoneNumberListPhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListPhoneNumberListPhoneNumberResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: shared.TrunkingV1TrunkPhoneNumber })
  phoneNumbers?: shared.TrunkingV1TrunkPhoneNumber[];
}


export class ListPhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListPhoneNumberPathParams;

  @SpeakeasyMetadata()
  queryParams: ListPhoneNumberQueryParams;

  @SpeakeasyMetadata()
  security: ListPhoneNumberSecurity;
}


export class ListPhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listPhoneNumberResponse?: ListPhoneNumberListPhoneNumberResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
