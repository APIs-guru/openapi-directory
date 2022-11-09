import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS = [
	"https://preview.twilio.com",
];



export class ListHostedNumbersHostedNumberOrderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IncomingPhoneNumberSid" })
  incomingPhoneNumberSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.HostedNumberOrderEnumStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UniqueName" })
  uniqueName?: string;
}


export class ListHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListHostedNumbersHostedNumberOrderQueryParams;

  @Metadata()
  security: ListHostedNumbersHostedNumberOrderSecurity;
}


export class ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta extends SpeakeasyBase {
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


export class ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PreviewHostedNumbersHostedNumberOrder })
  items?: shared.PreviewHostedNumbersHostedNumberOrder[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta;
}


export class ListHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listHostedNumbersHostedNumberOrderResponse?: ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse;

  @Metadata()
  statusCode: number;
}
