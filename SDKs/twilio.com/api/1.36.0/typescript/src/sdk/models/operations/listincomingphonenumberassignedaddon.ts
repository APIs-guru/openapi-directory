import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTINCOMINGPHONENUMBERASSIGNEDADDON_SERVERS = [
	"https://api.twilio.com",
];



export class ListIncomingPhoneNumberAssignedAddOnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" })
  resourceSid: string;
}


export class ListIncomingPhoneNumberAssignedAddOnQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListIncomingPhoneNumberAssignedAddOnSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListIncomingPhoneNumberAssignedAddOnPathParams;

  @Metadata()
  queryParams: ListIncomingPhoneNumberAssignedAddOnQueryParams;

  @Metadata()
  security: ListIncomingPhoneNumberAssignedAddOnSecurity;
}


export class ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assigned_add_ons", elemType: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn })
  assignedAddOns?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn[];

  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

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


export class ListIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listIncomingPhoneNumberAssignedAddOnResponse?: ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse;

  @Metadata()
  statusCode: number;
}
