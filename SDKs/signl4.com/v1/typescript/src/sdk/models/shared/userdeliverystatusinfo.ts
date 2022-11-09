import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserDeliveryStatusInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
