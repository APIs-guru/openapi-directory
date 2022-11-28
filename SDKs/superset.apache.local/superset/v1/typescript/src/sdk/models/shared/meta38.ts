import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Meta38 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=recipient_config_json" })
  recipientConfigJson?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
