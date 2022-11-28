import { SpeakeasyBase } from "../../../internal/utils";
import { ControllersSystemItem } from "./controllerssystemitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
export declare class ControllersSystemsResponse extends SpeakeasyBase {
    data?: ControllersSystemItem[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
