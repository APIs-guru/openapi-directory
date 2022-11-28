import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangeAlertStatusMultipleInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertIds" })
  alertIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
