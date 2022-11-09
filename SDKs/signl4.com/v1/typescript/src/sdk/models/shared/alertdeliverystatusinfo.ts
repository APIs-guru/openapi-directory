import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserDeliveryStatusInfo } from "./userdeliverystatusinfo";


export class AlertDeliveryStatusInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;

  @Metadata({ data: "json, name=users", elemType: shared.UserDeliveryStatusInfo })
  users?: UserDeliveryStatusInfo[];
}
