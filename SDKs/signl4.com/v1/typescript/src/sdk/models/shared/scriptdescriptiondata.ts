import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScriptDescriptionData extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=scriptType" })
  scriptType?: string;

  @Metadata({ data: "json, name=shortDescription" })
  shortDescription?: string;
}
