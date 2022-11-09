import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMARKETPLACEAVAILABLEADDON_SERVERS = [
	"https://preview.twilio.com",
];



export class ListMarketplaceAvailableAddOnQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMarketplaceAvailableAddOnSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMarketplaceAvailableAddOnRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListMarketplaceAvailableAddOnQueryParams;

  @Metadata()
  security: ListMarketplaceAvailableAddOnSecurity;
}


export class ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta extends SpeakeasyBase {
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


export class ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=available_add_ons", elemType: shared.PreviewMarketplaceAvailableAddOn })
  availableAddOns?: shared.PreviewMarketplaceAvailableAddOn[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta;
}


export class ListMarketplaceAvailableAddOnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMarketplaceAvailableAddOnResponse?: ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse;

  @Metadata()
  statusCode: number;
}
