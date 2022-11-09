import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCALL_SERVERS = [
	"https://api.twilio.com",
];



export class ListCallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListCallQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndTime<" })
  endTimeLessThan?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndTime>" })
  endTimeGreaterThan?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=From" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ParentCallSid" })
  parentCallSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartTime<" })
  startTimeLessThan?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartTime>" })
  startTimeGreaterThan?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.CallEnumStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=To" })
  to?: string;
}


export class ListCallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCallRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListCallPathParams;

  @Metadata()
  queryParams: ListCallQueryParams;

  @Metadata()
  security: ListCallSecurity;
}


export class ListCallListCallResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=calls", elemType: shared.ApiV2010AccountCall })
  calls?: shared.ApiV2010AccountCall[];

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


export class ListCallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCallResponse?: ListCallListCallResponse;

  @Metadata()
  statusCode: number;
}
