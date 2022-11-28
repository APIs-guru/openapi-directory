import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListIncomingPhoneNumberAssignedAddOnExtensionServerList = [
	"https://api.twilio.com",
] as const;


export class ListIncomingPhoneNumberAssignedAddOnExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssignedAddOnSid" })
  assignedAddOnSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" })
  resourceSid: string;
}


export class ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListIncomingPhoneNumberAssignedAddOnExtensionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=extensions", elemType: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension })
  extensions?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension[];

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

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


export class ListIncomingPhoneNumberAssignedAddOnExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListIncomingPhoneNumberAssignedAddOnExtensionPathParams;

  @SpeakeasyMetadata()
  queryParams: ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams;

  @SpeakeasyMetadata()
  security: ListIncomingPhoneNumberAssignedAddOnExtensionSecurity;
}


export class ListIncomingPhoneNumberAssignedAddOnExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listIncomingPhoneNumberAssignedAddOnExtensionResponse?: ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
