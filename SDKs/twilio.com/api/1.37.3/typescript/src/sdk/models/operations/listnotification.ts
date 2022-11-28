import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListNotificationServerList = [
	"https://api.twilio.com",
] as const;


export class ListNotificationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListNotificationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Log" })
  log?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MessageDate" })
  messageDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MessageDate<" })
  messageDateLessThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MessageDate>" })
  messageDateGreaterThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListNotificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListNotificationListNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=notifications", elemType: shared.ApiV2010AccountNotification })
  notifications?: shared.ApiV2010AccountNotification[];

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


export class ListNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListNotificationPathParams;

  @SpeakeasyMetadata()
  queryParams: ListNotificationQueryParams;

  @SpeakeasyMetadata()
  security: ListNotificationSecurity;
}


export class ListNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listNotificationResponse?: ListNotificationListNotificationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
