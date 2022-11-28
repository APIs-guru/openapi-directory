import { SpeakeasyBase } from "../../../internal/utils";
export declare class DataItemParentIdent extends SpeakeasyBase {
    parentValueIdent?: string;
    parentVariableIdent?: string;
}
export declare class DataItem extends SpeakeasyBase {
    ident?: string;
    parentIdent?: DataItemParentIdent;
    values?: string[];
}
