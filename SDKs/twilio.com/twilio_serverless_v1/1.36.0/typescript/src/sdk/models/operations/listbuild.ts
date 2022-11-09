import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTBUILD_SERVERS = [
	"https://serverless.twilio.com",
];



export class ListBuildPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListBuildQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListBuildSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBuildRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListBuildPathParams;

  @Metadata()
  queryParams: ListBuildQueryParams;

  @Metadata()
  security: ListBuildSecurity;
}


export class ListBuildListBuildResponseMeta extends SpeakeasyBase {
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


export class ListBuildListBuildResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=builds", elemType: shared.ServerlessV1ServiceBuild })
  builds?: shared.ServerlessV1ServiceBuild[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListBuildListBuildResponseMeta;
}


export class ListBuildResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBuildResponse?: ListBuildListBuildResponse;

  @Metadata()
  statusCode: number;
}
