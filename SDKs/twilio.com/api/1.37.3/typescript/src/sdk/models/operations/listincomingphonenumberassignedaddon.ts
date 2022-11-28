import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListIncomingPhoneNumberAssignedAddOnServerList = [
	"https://api.twilio.com",
] as const;


export class ListIncomingPhoneNumberAssignedAddOnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" })
  resourceSid: string;
}


export class ListIncomingPhoneNumberAssignedAddOnQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListIncomingPhoneNumberAssignedAddOnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assigned_add_ons", elemType: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn })
  assignedAddOns?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn[];

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

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


export class ListIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListIncomingPhoneNumberAssignedAddOnPathParams;

  @SpeakeasyMetadata()
  queryParams: ListIncomingPhoneNumberAssignedAddOnQueryParams;

  @SpeakeasyMetadata()
  security: ListIncomingPhoneNumberAssignedAddOnSecurity;
}


export class ListIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listIncomingPhoneNumberAssignedAddOnResponse?: ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
