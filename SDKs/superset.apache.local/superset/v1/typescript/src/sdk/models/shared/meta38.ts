import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Meta38 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=recipient_config_json" })
  recipientConfigJson?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
