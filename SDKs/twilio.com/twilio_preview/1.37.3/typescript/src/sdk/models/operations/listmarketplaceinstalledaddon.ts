import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListMarketplaceInstalledAddOnServerList = [
	"https://preview.twilio.com",
] as const;


export class ListMarketplaceInstalledAddOnQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta extends SpeakeasyBase {
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


export class ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=installed_add_ons", elemType: shared.PreviewMarketplaceInstalledAddOn })
  installedAddOns?: shared.PreviewMarketplaceInstalledAddOn[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta;
}


export class ListMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListMarketplaceInstalledAddOnQueryParams;

  @SpeakeasyMetadata()
  security: ListMarketplaceInstalledAddOnSecurity;
}


export class ListMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listMarketplaceInstalledAddOnResponse?: ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
