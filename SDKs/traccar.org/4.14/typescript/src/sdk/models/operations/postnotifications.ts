import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostNotificationsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Notification;
}


export class PostNotificationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notification?: shared.Notification;

  @Metadata()
  statusCode: number;
}
