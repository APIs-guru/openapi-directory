import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListCustomerProfileChannelEndpointAssignmentServerList = [
	"https://trusthub.twilio.com",
] as const;


export class ListCustomerProfileChannelEndpointAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;
}


export class ListCustomerProfileChannelEndpointAssignmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ChannelEndpointSid" })
  channelEndpointSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ChannelEndpointSids" })
  channelEndpointSids?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta extends SpeakeasyBase {
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


export class ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment })
  results?: shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment[];
}


export class ListCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListCustomerProfileChannelEndpointAssignmentPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCustomerProfileChannelEndpointAssignmentQueryParams;

  @SpeakeasyMetadata()
  security: ListCustomerProfileChannelEndpointAssignmentSecurity;
}


export class ListCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCustomerProfileChannelEndpointAssignmentResponse?: ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
