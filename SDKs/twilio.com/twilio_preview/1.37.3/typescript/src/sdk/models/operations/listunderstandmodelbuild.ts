import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListUnderstandModelBuildServerList = [
	"https://preview.twilio.com",
] as const;


export class ListUnderstandModelBuildPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class ListUnderstandModelBuildQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUnderstandModelBuildSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUnderstandModelBuildListUnderstandModelBuildResponseMeta extends SpeakeasyBase {
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


export class ListUnderstandModelBuildListUnderstandModelBuildResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListUnderstandModelBuildListUnderstandModelBuildResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=model_builds", elemType: shared.PreviewUnderstandAssistantModelBuild })
  modelBuilds?: shared.PreviewUnderstandAssistantModelBuild[];
}


export class ListUnderstandModelBuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListUnderstandModelBuildPathParams;

  @SpeakeasyMetadata()
  queryParams: ListUnderstandModelBuildQueryParams;

  @SpeakeasyMetadata()
  security: ListUnderstandModelBuildSecurity;
}


export class ListUnderstandModelBuildResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUnderstandModelBuildResponse?: ListUnderstandModelBuildListUnderstandModelBuildResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
