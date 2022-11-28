import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListRecordingAddOnResultServerList = [
	"https://api.twilio.com",
] as const;


export class ListRecordingAddOnResultPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReferenceSid" })
  referenceSid: string;
}


export class ListRecordingAddOnResultQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRecordingAddOnResultSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRecordingAddOnResultListRecordingAddOnResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_on_results", elemType: shared.ApiV2010AccountRecordingRecordingAddOnResult })
  addOnResults?: shared.ApiV2010AccountRecordingRecordingAddOnResult[];

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

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListRecordingAddOnResultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListRecordingAddOnResultPathParams;

  @SpeakeasyMetadata()
  queryParams: ListRecordingAddOnResultQueryParams;

  @SpeakeasyMetadata()
  security: ListRecordingAddOnResultSecurity;
}


export class ListRecordingAddOnResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listRecordingAddOnResultResponse?: ListRecordingAddOnResultListRecordingAddOnResultResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
