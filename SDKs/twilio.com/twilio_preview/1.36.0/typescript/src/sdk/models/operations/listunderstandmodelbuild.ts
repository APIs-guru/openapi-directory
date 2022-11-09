import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUNDERSTANDMODELBUILD_SERVERS = [
	"https://preview.twilio.com",
];



export class ListUnderstandModelBuildPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class ListUnderstandModelBuildQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUnderstandModelBuildSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUnderstandModelBuildRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUnderstandModelBuildPathParams;

  @Metadata()
  queryParams: ListUnderstandModelBuildQueryParams;

  @Metadata()
  security: ListUnderstandModelBuildSecurity;
}


export class ListUnderstandModelBuildListUnderstandModelBuildResponseMeta extends SpeakeasyBase {
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


export class ListUnderstandModelBuildListUnderstandModelBuildResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListUnderstandModelBuildListUnderstandModelBuildResponseMeta;

  @Metadata({ data: "json, name=model_builds", elemType: shared.PreviewUnderstandAssistantModelBuild })
  modelBuilds?: shared.PreviewUnderstandAssistantModelBuild[];
}


export class ListUnderstandModelBuildResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUnderstandModelBuildResponse?: ListUnderstandModelBuildListUnderstandModelBuildResponse;

  @Metadata()
  statusCode: number;
}
