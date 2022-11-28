import { SpeakeasyBase } from "../../../internal/utils";
import { ControllersPackageSystemItem } from "./controllerspackagesystemitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
export declare class ControllersPackageSystemsResponse extends SpeakeasyBase {
    data?: ControllersPackageSystemItem[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
