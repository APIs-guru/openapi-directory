import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListMediaRecordingServerList = [
	"https://media.twilio.com",
] as const;


export class ListMediaRecordingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.MediaRecordingEnumOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ProcessorSid" })
  processorSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceSid" })
  sourceSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.MediaRecordingEnumStatusEnum;
}


export class ListMediaRecordingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMediaRecordingListMediaRecordingResponseMeta extends SpeakeasyBase {
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


export class ListMediaRecordingListMediaRecordingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=media_recordings", elemType: shared.MediaV1MediaRecording })
  mediaRecordings?: shared.MediaV1MediaRecording[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListMediaRecordingListMediaRecordingResponseMeta;
}


export class ListMediaRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListMediaRecordingQueryParams;

  @SpeakeasyMetadata()
  security: ListMediaRecordingSecurity;
}


export class ListMediaRecordingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listMediaRecordingResponse?: ListMediaRecordingListMediaRecordingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
