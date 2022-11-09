import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChangeAlertStatusMultipleInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertIds" })
  alertIds?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
