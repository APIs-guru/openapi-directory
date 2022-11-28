import { SpeakeasyBase } from "../../../internal/utils";
import { ControllersFilterData } from "./controllersfilterdata";
export declare class ControllersListMeta extends SpeakeasyBase {
    filter?: Map<string, ControllersFilterData>;
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string[];
    subtotals?: Map<string, number>;
    totalItems?: number;
}
