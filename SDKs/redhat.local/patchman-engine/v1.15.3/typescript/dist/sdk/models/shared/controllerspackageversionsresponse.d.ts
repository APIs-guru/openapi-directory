import { SpeakeasyBase } from "../../../internal/utils";
import { ControllersPackageVersionItem } from "./controllerspackageversionitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";
export declare class ControllersPackageVersionsResponse extends SpeakeasyBase {
    data?: ControllersPackageVersionItem[];
    links?: ControllersLinks;
    meta?: ControllersListMeta;
}
