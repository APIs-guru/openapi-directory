import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNotificationsTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.NotificationType })
  notificationTypes?: shared.NotificationType[];

  @SpeakeasyMetadata()
  statusCode: number;
}
