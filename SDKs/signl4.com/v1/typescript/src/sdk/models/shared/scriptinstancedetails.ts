import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScriptInstanceInfoRuntimeInformationModel } from "./scriptinstanceinforuntimeinformationmodel";


export class ScriptInstanceDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: any;

  @Metadata({ data: "json, name=customScriptDescription" })
  customScriptDescription?: string;

  @Metadata({ data: "json, name=customScriptName" })
  customScriptName?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=eventPattern" })
  eventPattern?: any;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=runtimeInformation" })
  runtimeInformation?: ScriptInstanceInfoRuntimeInformationModel;

  @Metadata({ data: "json, name=scriptId" })
  scriptId?: string;

  @Metadata({ data: "json, name=scriptName" })
  scriptName?: string;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=teamId" })
  teamId?: string;
}
