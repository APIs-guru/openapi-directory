import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMARKETPLACEINSTALLEDADDON_SERVERS = [
	"https://preview.twilio.com",
];



export class ListMarketplaceInstalledAddOnQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListMarketplaceInstalledAddOnQueryParams;

  @Metadata()
  security: ListMarketplaceInstalledAddOnSecurity;
}


export class ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta extends SpeakeasyBase {
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


export class ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=installed_add_ons", elemType: shared.PreviewMarketplaceInstalledAddOn })
  installedAddOns?: shared.PreviewMarketplaceInstalledAddOn[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta;
}


export class ListMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMarketplaceInstalledAddOnResponse?: ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse;

  @Metadata()
  statusCode: number;
}
