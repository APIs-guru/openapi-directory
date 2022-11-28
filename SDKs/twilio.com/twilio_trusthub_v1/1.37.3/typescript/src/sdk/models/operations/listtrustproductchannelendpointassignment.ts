import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListTrustProductChannelEndpointAssignmentServerList = [
	"https://trusthub.twilio.com",
] as const;


export class ListTrustProductChannelEndpointAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class ListTrustProductChannelEndpointAssignmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ChannelEndpointSid" })
  channelEndpointSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ChannelEndpointSids" })
  channelEndpointSids?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListTrustProductChannelEndpointAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta extends SpeakeasyBase {
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


export class ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment })
  results?: shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment[];
}


export class ListTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListTrustProductChannelEndpointAssignmentPathParams;

  @SpeakeasyMetadata()
  queryParams: ListTrustProductChannelEndpointAssignmentQueryParams;

  @SpeakeasyMetadata()
  security: ListTrustProductChannelEndpointAssignmentSecurity;
}


export class ListTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listTrustProductChannelEndpointAssignmentResponse?: ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
