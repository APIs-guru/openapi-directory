import { SpeakeasyBase } from "../../../internal/utils";
import { ScriptInstanceInfoRuntimeInformationModel } from "./scriptinstanceinforuntimeinformationmodel";
export declare class ScriptInstanceDetails extends SpeakeasyBase {
    config?: any;
    customScriptDescription?: string;
    customScriptName?: string;
    enabled?: boolean;
    eventPattern?: any;
    instanceId?: string;
    lastModified?: Date;
    runtimeInformation?: ScriptInstanceInfoRuntimeInformationModel;
    scriptId?: string;
    scriptName?: string;
    subscriptionId?: string;
    teamId?: string;
}
