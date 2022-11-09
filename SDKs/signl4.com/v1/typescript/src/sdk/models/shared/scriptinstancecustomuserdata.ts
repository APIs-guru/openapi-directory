import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScriptInstanceCustomUserData extends SpeakeasyBase {
  @Metadata({ data: "json, name=customScriptDescription" })
  customScriptDescription?: string;

  @Metadata({ data: "json, name=customScriptName" })
  customScriptName?: string;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=scriptId" })
  scriptId?: string;
}
