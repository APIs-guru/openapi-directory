import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListRecordingAddOnResultPayloadServerList = [
	"https://api.twilio.com",
] as const;


export class ListRecordingAddOnResultPayloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AddOnResultSid" })
  addOnResultSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReferenceSid" })
  referenceSid: string;
}


export class ListRecordingAddOnResultPayloadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRecordingAddOnResultPayloadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=payloads", elemType: shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload })
  payloads?: shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload[];

  @SpeakeasyMetadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListRecordingAddOnResultPayloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListRecordingAddOnResultPayloadPathParams;

  @SpeakeasyMetadata()
  queryParams: ListRecordingAddOnResultPayloadQueryParams;

  @SpeakeasyMetadata()
  security: ListRecordingAddOnResultPayloadSecurity;
}


export class ListRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listRecordingAddOnResultPayloadResponse?: ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
