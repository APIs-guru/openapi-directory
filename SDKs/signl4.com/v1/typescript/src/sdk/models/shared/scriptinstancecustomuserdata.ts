import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScriptInstanceCustomUserData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customScriptDescription" })
  customScriptDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=customScriptName" })
  customScriptName?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=scriptId" })
  scriptId?: string;
}
