import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMARKETPLACEAVAILABLEADDONEXTENSION_SERVERS = [
	"https://preview.twilio.com",
];



export class ListMarketplaceAvailableAddOnExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AvailableAddOnSid" })
  availableAddOnSid: string;
}


export class ListMarketplaceAvailableAddOnExtensionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMarketplaceAvailableAddOnExtensionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMarketplaceAvailableAddOnExtensionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListMarketplaceAvailableAddOnExtensionPathParams;

  @Metadata()
  queryParams: ListMarketplaceAvailableAddOnExtensionQueryParams;

  @Metadata()
  security: ListMarketplaceAvailableAddOnExtensionSecurity;
}


export class ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta extends SpeakeasyBase {
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


export class ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=extensions", elemType: shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension })
  extensions?: shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta;
}


export class ListMarketplaceAvailableAddOnExtensionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMarketplaceAvailableAddOnExtensionResponse?: ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse;

  @Metadata()
  statusCode: number;
}
