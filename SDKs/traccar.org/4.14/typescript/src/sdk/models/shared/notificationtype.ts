import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NotificationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
