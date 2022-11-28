import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserDeliveryStatusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
