import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NotificationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;
}
