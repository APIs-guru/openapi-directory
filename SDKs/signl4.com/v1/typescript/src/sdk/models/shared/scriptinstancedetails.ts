import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScriptInstanceInfoRuntimeInformationModel } from "./scriptinstanceinforuntimeinformationmodel";



export class ScriptInstanceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: any;

  @SpeakeasyMetadata({ data: "json, name=customScriptDescription" })
  customScriptDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=customScriptName" })
  customScriptName?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventPattern" })
  eventPattern?: any;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=runtimeInformation" })
  runtimeInformation?: ScriptInstanceInfoRuntimeInformationModel;

  @SpeakeasyMetadata({ data: "json, name=scriptId" })
  scriptId?: string;

  @SpeakeasyMetadata({ data: "json, name=scriptName" })
  scriptName?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId?: string;
}
