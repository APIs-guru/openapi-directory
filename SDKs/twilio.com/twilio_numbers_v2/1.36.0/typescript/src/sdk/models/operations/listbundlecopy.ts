import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTBUNDLECOPY_SERVERS = [
	"https://numbers.twilio.com",
];



export class ListBundleCopyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" })
  bundleSid: string;
}


export class ListBundleCopyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListBundleCopySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBundleCopyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListBundleCopyPathParams;

  @Metadata()
  queryParams: ListBundleCopyQueryParams;

  @Metadata()
  security: ListBundleCopySecurity;
}


export class ListBundleCopyListBundleCopyResponseMeta extends SpeakeasyBase {
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


export class ListBundleCopyListBundleCopyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListBundleCopyListBundleCopyResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceBundleBundleCopy })
  results?: shared.NumbersV2RegulatoryComplianceBundleBundleCopy[];
}


export class ListBundleCopyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBundleCopyResponse?: ListBundleCopyListBundleCopyResponse;

  @Metadata()
  statusCode: number;
}
