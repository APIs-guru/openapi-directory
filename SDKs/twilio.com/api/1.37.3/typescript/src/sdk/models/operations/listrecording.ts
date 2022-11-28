import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListRecordingServerList = [
	"https://api.twilio.com",
] as const;


export class ListRecordingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListRecordingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CallSid" })
  callSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConferenceSid" })
  conferenceSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated<" })
  dateCreatedLessThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated>" })
  dateCreatedGreaterThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncludeSoftDeleted" })
  includeSoftDeleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRecordingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRecordingListRecordingResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=recordings", elemType: shared.ApiV2010AccountRecording })
  recordings?: shared.ApiV2010AccountRecording[];

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListRecordingPathParams;

  @SpeakeasyMetadata()
  queryParams: ListRecordingQueryParams;

  @SpeakeasyMetadata()
  security: ListRecordingSecurity;
}


export class ListRecordingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listRecordingResponse?: ListRecordingListRecordingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
