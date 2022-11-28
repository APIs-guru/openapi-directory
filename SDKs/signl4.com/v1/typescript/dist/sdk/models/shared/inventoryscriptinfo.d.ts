import { SpeakeasyBase } from "../../../internal/utils";
import { ScriptDescriptionData } from "./scriptdescriptiondata";
import { ScriptLocalizationDetail } from "./scriptlocalizationdetail";
export declare class InventoryScriptInfo extends SpeakeasyBase {
    config?: any;
    data?: ScriptDescriptionData;
    eventPattern?: any;
    scriptId?: string;
    scriptLocalizationDetails?: ScriptLocalizationDetail[];
    scriptName?: string;
    visibility?: string;
}
