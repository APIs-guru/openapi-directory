import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListCallRecordingServerList = [
	"https://api.twilio.com",
] as const;


export class ListCallRecordingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class ListCallRecordingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated<" })
  dateCreatedLessThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated>" })
  dateCreatedGreaterThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCallRecordingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCallRecordingListCallRecordingResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=recordings", elemType: shared.ApiV2010AccountCallCallRecording })
  recordings?: shared.ApiV2010AccountCallCallRecording[];

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListCallRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListCallRecordingPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCallRecordingQueryParams;

  @SpeakeasyMetadata()
  security: ListCallRecordingSecurity;
}


export class ListCallRecordingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCallRecordingResponse?: ListCallRecordingListCallRecordingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
