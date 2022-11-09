import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemConfigurationBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
