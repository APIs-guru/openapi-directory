import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ControllersPackageItem } from "./controllerspackageitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
export declare class ControllersPackagesResponse extends SpeakeasyBase {
    data?: ControllersPackageItem[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
