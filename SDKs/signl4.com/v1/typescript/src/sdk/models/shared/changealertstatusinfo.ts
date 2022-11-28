import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangeAlertStatusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
