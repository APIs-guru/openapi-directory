import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListAssetServerList = [
	"https://serverless.twilio.com",
] as const;


export class ListAssetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListAssetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListAssetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAssetListAssetResponseMeta extends SpeakeasyBase {
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


export class ListAssetListAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: shared.ServerlessV1ServiceAsset })
  assets?: shared.ServerlessV1ServiceAsset[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListAssetListAssetResponseMeta;
}


export class ListAssetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListAssetPathParams;

  @SpeakeasyMetadata()
  queryParams: ListAssetQueryParams;

  @SpeakeasyMetadata()
  security: ListAssetSecurity;
}


export class ListAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listAssetResponse?: ListAssetListAssetResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
