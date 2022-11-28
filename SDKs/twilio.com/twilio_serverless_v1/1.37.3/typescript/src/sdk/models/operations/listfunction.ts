import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListFunctionServerList = [
	"https://serverless.twilio.com",
] as const;


export class ListFunctionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListFunctionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFunctionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFunctionListFunctionResponseMeta extends SpeakeasyBase {
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


export class ListFunctionListFunctionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functions", elemType: shared.ServerlessV1ServiceFunction })
  functions?: shared.ServerlessV1ServiceFunction[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListFunctionListFunctionResponseMeta;
}


export class ListFunctionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListFunctionPathParams;

  @SpeakeasyMetadata()
  queryParams: ListFunctionQueryParams;

  @SpeakeasyMetadata()
  security: ListFunctionSecurity;
}


export class ListFunctionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listFunctionResponse?: ListFunctionListFunctionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
