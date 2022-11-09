import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChangeAlertStatusInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
