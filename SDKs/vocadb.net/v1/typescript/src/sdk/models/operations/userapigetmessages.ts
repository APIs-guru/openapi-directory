import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserApiGetMessagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetMessagesInboxEnum {
    Nothing = "Nothing"
,    Received = "Received"
,    Sent = "Sent"
,    Notifications = "Notifications"
}


export class UserApiGetMessagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=anotherUserId" })
  anotherUserId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inbox" })
  inbox?: UserApiGetMessagesInboxEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unread" })
  unread?: boolean;
}


export class UserApiGetMessagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiGetMessagesPathParams;

  @Metadata()
  queryParams: UserApiGetMessagesQueryParams;
}


export class UserApiGetMessagesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultUserMessageContract?: shared.PartialFindResultUserMessageContract;

  @Metadata()
  statusCode: number;
}
