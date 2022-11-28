import { SpeakeasyBase } from "../../../internal/utils";
import { ModelsPackageUpdate } from "./modelspackageupdate";
export declare class ControllersSystemPackageData extends SpeakeasyBase {
    description?: string;
    evra?: string;
    name?: string;
    summary?: string;
    updatable?: boolean;
    updates?: ModelsPackageUpdate[];
}
