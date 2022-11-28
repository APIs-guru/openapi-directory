import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserDeliveryStatusInfo } from "./userdeliverystatusinfo";



export class AlertDeliveryStatusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: UserDeliveryStatusInfo })
  users?: UserDeliveryStatusInfo[];
}
