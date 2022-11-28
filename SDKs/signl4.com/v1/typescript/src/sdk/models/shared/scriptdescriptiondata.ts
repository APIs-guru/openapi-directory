import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScriptDescriptionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scriptType" })
  scriptType?: string;

  @SpeakeasyMetadata({ data: "json, name=shortDescription" })
  shortDescription?: string;
}
