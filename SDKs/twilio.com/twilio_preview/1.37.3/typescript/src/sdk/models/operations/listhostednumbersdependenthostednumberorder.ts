import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListHostedNumbersDependentHostedNumberOrderServerList = [
	"https://preview.twilio.com",
] as const;


export class ListHostedNumbersDependentHostedNumberOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SigningDocumentSid" })
  signingDocumentSid: string;
}


export class ListHostedNumbersDependentHostedNumberOrderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncomingPhoneNumberSid" })
  incomingPhoneNumberSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.DependentHostedNumberOrderEnumStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UniqueName" })
  uniqueName?: string;
}


export class ListHostedNumbersDependentHostedNumberOrderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta extends SpeakeasyBase {
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


export class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder })
  items?: shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta;
}


export class ListHostedNumbersDependentHostedNumberOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListHostedNumbersDependentHostedNumberOrderPathParams;

  @SpeakeasyMetadata()
  queryParams: ListHostedNumbersDependentHostedNumberOrderQueryParams;

  @SpeakeasyMetadata()
  security: ListHostedNumbersDependentHostedNumberOrderSecurity;
}


export class ListHostedNumbersDependentHostedNumberOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listHostedNumbersDependentHostedNumberOrderResponse?: ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
