import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListCustomerProfileEntityAssignmentServerList = [
	"https://trusthub.twilio.com",
] as const;


export class ListCustomerProfileEntityAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;
}


export class ListCustomerProfileEntityAssignmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCustomerProfileEntityAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta extends SpeakeasyBase {
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


export class ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment })
  results?: shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment[];
}


export class ListCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListCustomerProfileEntityAssignmentPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCustomerProfileEntityAssignmentQueryParams;

  @SpeakeasyMetadata()
  security: ListCustomerProfileEntityAssignmentSecurity;
}


export class ListCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCustomerProfileEntityAssignmentResponse?: ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
