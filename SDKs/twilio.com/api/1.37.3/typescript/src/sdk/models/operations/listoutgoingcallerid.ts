import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListOutgoingCallerIdServerList = [
	"https://api.twilio.com",
] as const;


export class ListOutgoingCallerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListOutgoingCallerIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" })
  phoneNumber?: string;
}


export class ListOutgoingCallerIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListOutgoingCallerIdListOutgoingCallerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=outgoing_caller_ids", elemType: shared.ApiV2010AccountOutgoingCallerId })
  outgoingCallerIds?: shared.ApiV2010AccountOutgoingCallerId[];

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


export class ListOutgoingCallerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListOutgoingCallerIdPathParams;

  @SpeakeasyMetadata()
  queryParams: ListOutgoingCallerIdQueryParams;

  @SpeakeasyMetadata()
  security: ListOutgoingCallerIdSecurity;
}


export class ListOutgoingCallerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listOutgoingCallerIdResponse?: ListOutgoingCallerIdListOutgoingCallerIdResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
