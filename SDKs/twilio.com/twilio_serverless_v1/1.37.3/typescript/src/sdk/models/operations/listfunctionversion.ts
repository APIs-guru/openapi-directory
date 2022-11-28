import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListFunctionVersionServerList = [
	"https://serverless.twilio.com",
] as const;


export class ListFunctionVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionSid" })
  functionSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListFunctionVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFunctionVersionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFunctionVersionListFunctionVersionResponseMeta extends SpeakeasyBase {
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


export class ListFunctionVersionListFunctionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=function_versions", elemType: shared.ServerlessV1ServiceFunctionFunctionVersion })
  functionVersions?: shared.ServerlessV1ServiceFunctionFunctionVersion[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListFunctionVersionListFunctionVersionResponseMeta;
}


export class ListFunctionVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListFunctionVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: ListFunctionVersionQueryParams;

  @SpeakeasyMetadata()
  security: ListFunctionVersionSecurity;
}


export class ListFunctionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listFunctionVersionResponse?: ListFunctionVersionListFunctionVersionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
