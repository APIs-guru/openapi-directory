import { SpeakeasyBase } from "../../../internal/utils";
import { ControllersAdvisoryItem } from "./controllersadvisoryitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
export declare class ControllersAdvisoriesResponse extends SpeakeasyBase {
    data?: ControllersAdvisoryItem[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
