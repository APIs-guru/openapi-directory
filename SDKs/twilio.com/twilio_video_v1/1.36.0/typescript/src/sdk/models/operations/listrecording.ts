import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTRECORDING_SERVERS = [
	"https://video.twilio.com",
];



export class ListRecordingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" })
  dateCreatedBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupingSid" })
  groupingSid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=MediaType" })
  mediaType?: shared.RecordingEnumTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceSid" })
  sourceSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.RecordingEnumStatusEnum;
}


export class ListRecordingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRecordingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListRecordingQueryParams;

  @Metadata()
  security: ListRecordingSecurity;
}


export class ListRecordingListRecordingResponseMeta extends SpeakeasyBase {
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


export class ListRecordingListRecordingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListRecordingListRecordingResponseMeta;

  @Metadata({ data: "json, name=recordings", elemType: shared.VideoV1Recording })
  recordings?: shared.VideoV1Recording[];
}


export class ListRecordingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRecordingResponse?: ListRecordingListRecordingResponse;

  @Metadata()
  statusCode: number;
}
