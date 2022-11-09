import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTHOSTEDNUMBERSDEPENDENTHOSTEDNUMBERORDER_SERVERS = [
	"https://preview.twilio.com",
];



export class ListHostedNumbersDependentHostedNumberOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SigningDocumentSid" })
  signingDocumentSid: string;
}


export class ListHostedNumbersDependentHostedNumberOrderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IncomingPhoneNumberSid" })
  incomingPhoneNumberSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.DependentHostedNumberOrderEnumStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UniqueName" })
  uniqueName?: string;
}


export class ListHostedNumbersDependentHostedNumberOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListHostedNumbersDependentHostedNumberOrderRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListHostedNumbersDependentHostedNumberOrderPathParams;

  @Metadata()
  queryParams: ListHostedNumbersDependentHostedNumberOrderQueryParams;

  @Metadata()
  security: ListHostedNumbersDependentHostedNumberOrderSecurity;
}


export class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta extends SpeakeasyBase {
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


export class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder })
  items?: shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta;
}


export class ListHostedNumbersDependentHostedNumberOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listHostedNumbersDependentHostedNumberOrderResponse?: ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse;

  @Metadata()
  statusCode: number;
}
