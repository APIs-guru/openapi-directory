import { SpeakeasyBase } from "../../../internal/utils";
import { ControllersSystemAdvisoryItem } from "./controllerssystemadvisoryitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
export declare class ControllersSystemAdvisoriesResponse extends SpeakeasyBase {
    data?: ControllersSystemAdvisoryItem[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
