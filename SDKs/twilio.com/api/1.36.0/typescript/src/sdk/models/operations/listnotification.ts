import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTNOTIFICATION_SERVERS = [
	"https://api.twilio.com",
];



export class ListNotificationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListNotificationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Log" })
  log?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MessageDate" })
  messageDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MessageDate<" })
  messageDateLessThan?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MessageDate>" })
  messageDateGreaterThan?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListNotificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListNotificationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListNotificationPathParams;

  @Metadata()
  queryParams: ListNotificationQueryParams;

  @Metadata()
  security: ListNotificationSecurity;
}


export class ListNotificationListNotificationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @Metadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @Metadata({ data: "json, name=notifications", elemType: shared.ApiV2010AccountNotification })
  notifications?: shared.ApiV2010AccountNotification[];

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


export class ListNotificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listNotificationResponse?: ListNotificationListNotificationResponse;

  @Metadata()
  statusCode: number;
}
