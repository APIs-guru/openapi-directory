import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTINCOMINGPHONENUMBERASSIGNEDADDONEXTENSION_SERVERS = [
	"https://api.twilio.com",
];



export class ListIncomingPhoneNumberAssignedAddOnExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssignedAddOnSid" })
  assignedAddOnSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" })
  resourceSid: string;
}


export class ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListIncomingPhoneNumberAssignedAddOnExtensionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListIncomingPhoneNumberAssignedAddOnExtensionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListIncomingPhoneNumberAssignedAddOnExtensionPathParams;

  @Metadata()
  queryParams: ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams;

  @Metadata()
  security: ListIncomingPhoneNumberAssignedAddOnExtensionSecurity;
}


export class ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=extensions", elemType: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension })
  extensions?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension[];

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


export class ListIncomingPhoneNumberAssignedAddOnExtensionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listIncomingPhoneNumberAssignedAddOnExtensionResponse?: ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse;

  @Metadata()
  statusCode: number;
}
