import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserApiGetMessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetMessagesInboxEnum {
    Nothing = "Nothing",
    Received = "Received",
    Sent = "Sent",
    Notifications = "Notifications"
}


export class UserApiGetMessagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=anotherUserId" })
  anotherUserId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inbox" })
  inbox?: UserApiGetMessagesInboxEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unread" })
  unread?: boolean;
}


export class UserApiGetMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiGetMessagesPathParams;

  @SpeakeasyMetadata()
  queryParams: UserApiGetMessagesQueryParams;
}


export class UserApiGetMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultUserMessageContract?: shared.PartialFindResultUserMessageContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
