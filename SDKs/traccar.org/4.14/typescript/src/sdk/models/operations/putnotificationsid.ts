import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutNotificationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutNotificationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutNotificationsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Notification;
}


export class PutNotificationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notification?: shared.Notification;

  @Metadata()
  statusCode: number;
}
