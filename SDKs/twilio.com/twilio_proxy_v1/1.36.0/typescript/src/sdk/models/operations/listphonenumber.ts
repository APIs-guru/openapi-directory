import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTPHONENUMBER_SERVERS = [
	"https://proxy.twilio.com",
];



export class ListPhoneNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListPhoneNumberQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListPhoneNumberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListPhoneNumberRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListPhoneNumberPathParams;

  @Metadata()
  queryParams: ListPhoneNumberQueryParams;

  @Metadata()
  security: ListPhoneNumberSecurity;
}


export class ListPhoneNumberListPhoneNumberResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListPhoneNumberListPhoneNumberResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListPhoneNumberListPhoneNumberResponseMeta;

  @Metadata({ data: "json, name=phone_numbers", elemType: shared.ProxyV1ServicePhoneNumber })
  phoneNumbers?: shared.ProxyV1ServicePhoneNumber[];
}


export class ListPhoneNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listPhoneNumberResponse?: ListPhoneNumberListPhoneNumberResponse;

  @Metadata()
  statusCode: number;
}
