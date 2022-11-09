import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMEDIARECORDING_SERVERS = [
	"https://media.twilio.com",
];



export class ListMediaRecordingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.MediaRecordingEnumOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ProcessorSid" })
  processorSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceSid" })
  sourceSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.MediaRecordingEnumStatusEnum;
}


export class ListMediaRecordingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMediaRecordingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListMediaRecordingQueryParams;

  @Metadata()
  security: ListMediaRecordingSecurity;
}


export class ListMediaRecordingListMediaRecordingResponseMeta extends SpeakeasyBase {
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


export class ListMediaRecordingListMediaRecordingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=media_recordings", elemType: shared.MediaV1MediaRecording })
  mediaRecordings?: shared.MediaV1MediaRecording[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListMediaRecordingListMediaRecordingResponseMeta;
}


export class ListMediaRecordingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMediaRecordingResponse?: ListMediaRecordingListMediaRecordingResponse;

  @Metadata()
  statusCode: number;
}
