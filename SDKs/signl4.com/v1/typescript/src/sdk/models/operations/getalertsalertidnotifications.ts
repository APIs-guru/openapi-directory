import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlertsAlertIdNotificationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class GetAlertsAlertIdNotificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAlertsAlertIdNotificationsPathParams;
}


export class GetAlertsAlertIdNotificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AlertNotificationInfo })
  alertNotificationInfos?: shared.AlertNotificationInfo[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
