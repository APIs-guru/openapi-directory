import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTTRUSTPRODUCTCHANNELENDPOINTASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class ListTrustProductChannelEndpointAssignmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class ListTrustProductChannelEndpointAssignmentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ChannelEndpointSid" })
  channelEndpointSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ChannelEndpointSids" })
  channelEndpointSids?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListTrustProductChannelEndpointAssignmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListTrustProductChannelEndpointAssignmentPathParams;

  @Metadata()
  queryParams: ListTrustProductChannelEndpointAssignmentQueryParams;

  @Metadata()
  security: ListTrustProductChannelEndpointAssignmentSecurity;
}


export class ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta extends SpeakeasyBase {
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


export class ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment })
  results?: shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment[];
}


export class ListTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTrustProductChannelEndpointAssignmentResponse?: ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse;

  @Metadata()
  statusCode: number;
}
