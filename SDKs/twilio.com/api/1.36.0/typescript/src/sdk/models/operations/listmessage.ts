import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMESSAGE_SERVERS = [
	"https://api.twilio.com",
];



export class ListMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListMessageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DateSent" })
  dateSent?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateSent<" })
  dateSentLessThan?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateSent>" })
  dateSentGreaterThan?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=From" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=To" })
  to?: string;
}


export class ListMessageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMessageRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListMessagePathParams;

  @Metadata()
  queryParams: ListMessageQueryParams;

  @Metadata()
  security: ListMessageSecurity;
}


export class ListMessageListMessageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @Metadata({ data: "json, name=messages", elemType: shared.ApiV2010AccountMessage })
  messages?: shared.ApiV2010AccountMessage[];

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


export class ListMessageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMessageResponse?: ListMessageListMessageResponse;

  @Metadata()
  statusCode: number;
}
