import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTRECORDINGTRANSCRIPTION_SERVERS = [
	"https://api.twilio.com",
];



export class ListRecordingTranscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=RecordingSid" })
  recordingSid: string;
}


export class ListRecordingTranscriptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRecordingTranscriptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRecordingTranscriptionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListRecordingTranscriptionPathParams;

  @Metadata()
  queryParams: ListRecordingTranscriptionQueryParams;

  @Metadata()
  security: ListRecordingTranscriptionSecurity;
}


export class ListRecordingTranscriptionListRecordingTranscriptionResponse extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=transcriptions", elemType: shared.ApiV2010AccountRecordingRecordingTranscription })
  transcriptions?: shared.ApiV2010AccountRecordingRecordingTranscription[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListRecordingTranscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRecordingTranscriptionResponse?: ListRecordingTranscriptionListRecordingTranscriptionResponse;

  @Metadata()
  statusCode: number;
}
