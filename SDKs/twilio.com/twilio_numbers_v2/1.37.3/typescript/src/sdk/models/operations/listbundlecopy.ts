import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListBundleCopyServerList = [
	"https://numbers.twilio.com",
] as const;


export class ListBundleCopyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" })
  bundleSid: string;
}


export class ListBundleCopyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListBundleCopySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBundleCopyListBundleCopyResponseMeta extends SpeakeasyBase {
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


export class ListBundleCopyListBundleCopyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListBundleCopyListBundleCopyResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceBundleBundleCopy })
  results?: shared.NumbersV2RegulatoryComplianceBundleBundleCopy[];
}


export class ListBundleCopyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListBundleCopyPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBundleCopyQueryParams;

  @SpeakeasyMetadata()
  security: ListBundleCopySecurity;
}


export class ListBundleCopyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listBundleCopyResponse?: ListBundleCopyListBundleCopyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
