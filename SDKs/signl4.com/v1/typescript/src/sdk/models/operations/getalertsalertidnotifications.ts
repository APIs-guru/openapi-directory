import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlertsAlertIdNotificationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class GetAlertsAlertIdNotificationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAlertsAlertIdNotificationsPathParams;
}


export class GetAlertsAlertIdNotificationsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AlertNotificationInfo })
  alertNotificationInfos?: shared.AlertNotificationInfo[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
