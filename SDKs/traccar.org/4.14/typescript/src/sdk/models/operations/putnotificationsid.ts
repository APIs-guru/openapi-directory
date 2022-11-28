import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutNotificationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutNotificationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutNotificationsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Notification;
}


export class PutNotificationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notification?: shared.Notification;

  @SpeakeasyMetadata()
  statusCode: number;
}
