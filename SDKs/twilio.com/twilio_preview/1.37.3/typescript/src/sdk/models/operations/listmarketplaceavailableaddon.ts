import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListMarketplaceAvailableAddOnServerList = [
	"https://preview.twilio.com",
] as const;


export class ListMarketplaceAvailableAddOnQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMarketplaceAvailableAddOnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta extends SpeakeasyBase {
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


export class ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available_add_ons", elemType: shared.PreviewMarketplaceAvailableAddOn })
  availableAddOns?: shared.PreviewMarketplaceAvailableAddOn[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta;
}


export class ListMarketplaceAvailableAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListMarketplaceAvailableAddOnQueryParams;

  @SpeakeasyMetadata()
  security: ListMarketplaceAvailableAddOnSecurity;
}


export class ListMarketplaceAvailableAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listMarketplaceAvailableAddOnResponse?: ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
