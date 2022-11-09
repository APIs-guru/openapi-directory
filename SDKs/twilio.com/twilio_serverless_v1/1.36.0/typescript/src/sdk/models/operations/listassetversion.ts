import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTASSETVERSION_SERVERS = [
	"https://serverless.twilio.com",
];



export class ListAssetVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssetSid" })
  assetSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListAssetVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListAssetVersionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAssetVersionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListAssetVersionPathParams;

  @Metadata()
  queryParams: ListAssetVersionQueryParams;

  @Metadata()
  security: ListAssetVersionSecurity;
}


export class ListAssetVersionListAssetVersionResponseMeta extends SpeakeasyBase {
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


export class ListAssetVersionListAssetVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_versions", elemType: shared.ServerlessV1ServiceAssetAssetVersion })
  assetVersions?: shared.ServerlessV1ServiceAssetAssetVersion[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListAssetVersionListAssetVersionResponseMeta;
}


export class ListAssetVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAssetVersionResponse?: ListAssetVersionListAssetVersionResponse;

  @Metadata()
  statusCode: number;
}
