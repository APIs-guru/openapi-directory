import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ControllersSystemPackageData } from "./controllerssystempackagedata";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
export declare class ControllersSystemPackageResponse extends SpeakeasyBase {
    data?: ControllersSystemPackageData[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
