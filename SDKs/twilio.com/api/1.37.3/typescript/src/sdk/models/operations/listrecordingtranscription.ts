import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListRecordingTranscriptionServerList = [
	"https://api.twilio.com",
] as const;


export class ListRecordingTranscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RecordingSid" })
  recordingSid: string;
}


export class ListRecordingTranscriptionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRecordingTranscriptionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRecordingTranscriptionListRecordingTranscriptionResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=transcriptions", elemType: shared.ApiV2010AccountRecordingRecordingTranscription })
  transcriptions?: shared.ApiV2010AccountRecordingRecordingTranscription[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListRecordingTranscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListRecordingTranscriptionPathParams;

  @SpeakeasyMetadata()
  queryParams: ListRecordingTranscriptionQueryParams;

  @SpeakeasyMetadata()
  security: ListRecordingTranscriptionSecurity;
}


export class ListRecordingTranscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listRecordingTranscriptionResponse?: ListRecordingTranscriptionListRecordingTranscriptionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
