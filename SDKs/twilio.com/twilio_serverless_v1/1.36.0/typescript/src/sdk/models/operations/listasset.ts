import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTASSET_SERVERS = [
	"https://serverless.twilio.com",
];



export class ListAssetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListAssetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListAssetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAssetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListAssetPathParams;

  @Metadata()
  queryParams: ListAssetQueryParams;

  @Metadata()
  security: ListAssetSecurity;
}


export class ListAssetListAssetResponseMeta extends SpeakeasyBase {
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


export class ListAssetListAssetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: shared.ServerlessV1ServiceAsset })
  assets?: shared.ServerlessV1ServiceAsset[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListAssetListAssetResponseMeta;
}


export class ListAssetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAssetResponse?: ListAssetListAssetResponse;

  @Metadata()
  statusCode: number;
}
