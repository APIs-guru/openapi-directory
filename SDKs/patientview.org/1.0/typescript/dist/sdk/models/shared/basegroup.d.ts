import { SpeakeasyBase } from "../../../internal/utils";
import { Lookup } from "./lookup";
export declare class BaseGroup extends SpeakeasyBase {
    code?: string;
    groupType?: Lookup;
    id?: number;
    lastImportDate?: Date;
    name?: string;
    parentCodes?: string[];
    shortName?: string;
    visible?: boolean;
    visibleToJoin?: boolean;
}
