import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNotificationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refresh" })
  refresh?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;
}


export class GetNotificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNotificationsQueryParams;
}


export class GetNotificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Notification })
  notifications?: shared.Notification[];

  @SpeakeasyMetadata()
  statusCode: number;
}
