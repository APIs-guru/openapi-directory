import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTINCOMINGPHONENUMBERLOCAL_SERVERS = [
	"https://api.twilio.com",
];



export class ListIncomingPhoneNumberLocalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListIncomingPhoneNumberLocalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Beta" })
  beta?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Origin" })
  origin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" })
  phoneNumber?: string;
}


export class ListIncomingPhoneNumberLocalSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListIncomingPhoneNumberLocalRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListIncomingPhoneNumberLocalPathParams;

  @Metadata()
  queryParams: ListIncomingPhoneNumberLocalQueryParams;

  @Metadata()
  security: ListIncomingPhoneNumberLocalSecurity;
}


export class ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @Metadata({ data: "json, name=incoming_phone_numbers", elemType: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal })
  incomingPhoneNumbers?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal[];

  @Metadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListIncomingPhoneNumberLocalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listIncomingPhoneNumberLocalResponse?: ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse;

  @Metadata()
  statusCode: number;
}
