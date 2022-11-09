import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMARKETPLACEINSTALLEDADDONEXTENSION_SERVERS = [
	"https://preview.twilio.com",
];



export class ListMarketplaceInstalledAddOnExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=InstalledAddOnSid" })
  installedAddOnSid: string;
}


export class ListMarketplaceInstalledAddOnExtensionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMarketplaceInstalledAddOnExtensionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMarketplaceInstalledAddOnExtensionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListMarketplaceInstalledAddOnExtensionPathParams;

  @Metadata()
  queryParams: ListMarketplaceInstalledAddOnExtensionQueryParams;

  @Metadata()
  security: ListMarketplaceInstalledAddOnExtensionSecurity;
}


export class ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta extends SpeakeasyBase {
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


export class ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=extensions", elemType: shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension })
  extensions?: shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta;
}


export class ListMarketplaceInstalledAddOnExtensionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMarketplaceInstalledAddOnExtensionResponse?: ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse;

  @Metadata()
  statusCode: number;
}
