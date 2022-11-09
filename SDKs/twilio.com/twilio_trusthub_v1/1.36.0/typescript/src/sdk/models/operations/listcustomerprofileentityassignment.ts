import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCUSTOMERPROFILEENTITYASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class ListCustomerProfileEntityAssignmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;
}


export class ListCustomerProfileEntityAssignmentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCustomerProfileEntityAssignmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListCustomerProfileEntityAssignmentPathParams;

  @Metadata()
  queryParams: ListCustomerProfileEntityAssignmentQueryParams;

  @Metadata()
  security: ListCustomerProfileEntityAssignmentSecurity;
}


export class ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta extends SpeakeasyBase {
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


export class ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment })
  results?: shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment[];
}


export class ListCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCustomerProfileEntityAssignmentResponse?: ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse;

  @Metadata()
  statusCode: number;
}
