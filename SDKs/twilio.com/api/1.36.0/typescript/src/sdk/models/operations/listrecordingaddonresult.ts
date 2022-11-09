import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTRECORDINGADDONRESULT_SERVERS = [
	"https://api.twilio.com",
];



export class ListRecordingAddOnResultPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ReferenceSid" })
  referenceSid: string;
}


export class ListRecordingAddOnResultQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRecordingAddOnResultSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRecordingAddOnResultRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListRecordingAddOnResultPathParams;

  @Metadata()
  queryParams: ListRecordingAddOnResultQueryParams;

  @Metadata()
  security: ListRecordingAddOnResultSecurity;
}


export class ListRecordingAddOnResultListRecordingAddOnResultResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_on_results", elemType: shared.ApiV2010AccountRecordingRecordingAddOnResult })
  addOnResults?: shared.ApiV2010AccountRecordingRecordingAddOnResult[];

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

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListRecordingAddOnResultResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRecordingAddOnResultResponse?: ListRecordingAddOnResultListRecordingAddOnResultResponse;

  @Metadata()
  statusCode: number;
}
