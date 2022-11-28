import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListBuildServerList = [
	"https://serverless.twilio.com",
] as const;


export class ListBuildPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListBuildQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListBuildSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBuildListBuildResponseMeta extends SpeakeasyBase {
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


export class ListBuildListBuildResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builds", elemType: shared.ServerlessV1ServiceBuild })
  builds?: shared.ServerlessV1ServiceBuild[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListBuildListBuildResponseMeta;
}


export class ListBuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListBuildPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBuildQueryParams;

  @SpeakeasyMetadata()
  security: ListBuildSecurity;
}


export class ListBuildResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listBuildResponse?: ListBuildListBuildResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
