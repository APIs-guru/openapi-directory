import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMODELBUILD_SERVERS = [
	"https://autopilot.twilio.com",
];



export class ListModelBuildPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class ListModelBuildQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListModelBuildSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListModelBuildRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListModelBuildPathParams;

  @Metadata()
  queryParams: ListModelBuildQueryParams;

  @Metadata()
  security: ListModelBuildSecurity;
}


export class ListModelBuildListModelBuildResponseMeta extends SpeakeasyBase {
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


export class ListModelBuildListModelBuildResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListModelBuildListModelBuildResponseMeta;

  @Metadata({ data: "json, name=model_builds", elemType: shared.AutopilotV1AssistantModelBuild })
  modelBuilds?: shared.AutopilotV1AssistantModelBuild[];
}


export class ListModelBuildResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listModelBuildResponse?: ListModelBuildListModelBuildResponse;

  @Metadata()
  statusCode: number;
}
