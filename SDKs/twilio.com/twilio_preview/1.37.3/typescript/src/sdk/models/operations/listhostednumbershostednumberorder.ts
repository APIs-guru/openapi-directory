import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListHostedNumbersHostedNumberOrderServerList = [
	"https://preview.twilio.com",
] as const;


export class ListHostedNumbersHostedNumberOrderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncomingPhoneNumberSid" })
  incomingPhoneNumberSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.HostedNumberOrderEnumStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UniqueName" })
  uniqueName?: string;
}


export class ListHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta extends SpeakeasyBase {
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


export class ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.PreviewHostedNumbersHostedNumberOrder })
  items?: shared.PreviewHostedNumbersHostedNumberOrder[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta;
}


export class ListHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListHostedNumbersHostedNumberOrderQueryParams;

  @SpeakeasyMetadata()
  security: ListHostedNumbersHostedNumberOrderSecurity;
}


export class ListHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listHostedNumbersHostedNumberOrderResponse?: ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
