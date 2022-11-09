import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTRECORDINGADDONRESULTPAYLOAD_SERVERS = [
	"https://api.twilio.com",
];



export class ListRecordingAddOnResultPayloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=AddOnResultSid" })
  addOnResultSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ReferenceSid" })
  referenceSid: string;
}


export class ListRecordingAddOnResultPayloadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRecordingAddOnResultPayloadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRecordingAddOnResultPayloadRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListRecordingAddOnResultPayloadPathParams;

  @Metadata()
  queryParams: ListRecordingAddOnResultPayloadQueryParams;

  @Metadata()
  security: ListRecordingAddOnResultPayloadSecurity;
}


export class ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @Metadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=payloads", elemType: shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload })
  payloads?: shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload[];

  @Metadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRecordingAddOnResultPayloadResponse?: ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse;

  @Metadata()
  statusCode: number;
}
