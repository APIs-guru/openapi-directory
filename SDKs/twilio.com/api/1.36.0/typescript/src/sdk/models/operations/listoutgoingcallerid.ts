import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTOUTGOINGCALLERID_SERVERS = [
	"https://api.twilio.com",
];



export class ListOutgoingCallerIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListOutgoingCallerIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" })
  phoneNumber?: string;
}


export class ListOutgoingCallerIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListOutgoingCallerIdRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListOutgoingCallerIdPathParams;

  @Metadata()
  queryParams: ListOutgoingCallerIdQueryParams;

  @Metadata()
  security: ListOutgoingCallerIdSecurity;
}


export class ListOutgoingCallerIdListOutgoingCallerIdResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @Metadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @Metadata({ data: "json, name=outgoing_caller_ids", elemType: shared.ApiV2010AccountOutgoingCallerId })
  outgoingCallerIds?: shared.ApiV2010AccountOutgoingCallerId[];

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


export class ListOutgoingCallerIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listOutgoingCallerIdResponse?: ListOutgoingCallerIdListOutgoingCallerIdResponse;

  @Metadata()
  statusCode: number;
}
