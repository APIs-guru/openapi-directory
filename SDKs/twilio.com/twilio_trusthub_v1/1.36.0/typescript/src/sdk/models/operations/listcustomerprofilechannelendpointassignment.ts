import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCUSTOMERPROFILECHANNELENDPOINTASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class ListCustomerProfileChannelEndpointAssignmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;
}


export class ListCustomerProfileChannelEndpointAssignmentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ChannelEndpointSid" })
  channelEndpointSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ChannelEndpointSids" })
  channelEndpointSids?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListCustomerProfileChannelEndpointAssignmentPathParams;

  @Metadata()
  queryParams: ListCustomerProfileChannelEndpointAssignmentQueryParams;

  @Metadata()
  security: ListCustomerProfileChannelEndpointAssignmentSecurity;
}


export class ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta extends SpeakeasyBase {
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


export class ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment })
  results?: shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment[];
}


export class ListCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCustomerProfileChannelEndpointAssignmentResponse?: ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse;

  @Metadata()
  statusCode: number;
}
