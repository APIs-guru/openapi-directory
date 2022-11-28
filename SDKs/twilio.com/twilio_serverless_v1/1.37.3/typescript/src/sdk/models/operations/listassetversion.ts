import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListAssetVersionServerList = [
	"https://serverless.twilio.com",
] as const;


export class ListAssetVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssetSid" })
  assetSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListAssetVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListAssetVersionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAssetVersionListAssetVersionResponseMeta extends SpeakeasyBase {
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


export class ListAssetVersionListAssetVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_versions", elemType: shared.ServerlessV1ServiceAssetAssetVersion })
  assetVersions?: shared.ServerlessV1ServiceAssetAssetVersion[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListAssetVersionListAssetVersionResponseMeta;
}


export class ListAssetVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListAssetVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: ListAssetVersionQueryParams;

  @SpeakeasyMetadata()
  security: ListAssetVersionSecurity;
}


export class ListAssetVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listAssetVersionResponse?: ListAssetVersionListAssetVersionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
