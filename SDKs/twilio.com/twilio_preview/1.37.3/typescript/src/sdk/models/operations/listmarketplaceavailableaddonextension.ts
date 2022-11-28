import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListMarketplaceAvailableAddOnExtensionServerList = [
	"https://preview.twilio.com",
] as const;


export class ListMarketplaceAvailableAddOnExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AvailableAddOnSid" })
  availableAddOnSid: string;
}


export class ListMarketplaceAvailableAddOnExtensionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMarketplaceAvailableAddOnExtensionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta extends SpeakeasyBase {
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


export class ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extensions", elemType: shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension })
  extensions?: shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta;
}


export class ListMarketplaceAvailableAddOnExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListMarketplaceAvailableAddOnExtensionPathParams;

  @SpeakeasyMetadata()
  queryParams: ListMarketplaceAvailableAddOnExtensionQueryParams;

  @SpeakeasyMetadata()
  security: ListMarketplaceAvailableAddOnExtensionSecurity;
}


export class ListMarketplaceAvailableAddOnExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listMarketplaceAvailableAddOnExtensionResponse?: ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
