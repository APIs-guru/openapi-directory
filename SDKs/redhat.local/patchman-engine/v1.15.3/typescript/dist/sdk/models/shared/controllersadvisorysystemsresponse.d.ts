import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ControllersSystemItem } from "./controllerssystemitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
export declare class ControllersAdvisorySystemsResponse extends SpeakeasyBase {
    data?: ControllersSystemItem[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
