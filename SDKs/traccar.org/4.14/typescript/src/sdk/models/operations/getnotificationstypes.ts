import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNotificationsTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.NotificationType })
  notificationTypes?: shared.NotificationType[];

  @Metadata()
  statusCode: number;
}
