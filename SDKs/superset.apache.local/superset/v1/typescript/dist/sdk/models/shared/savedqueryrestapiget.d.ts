import { SpeakeasyBase } from "../../../internal/utils";
import { Meta31 } from "./meta31";
import { Meta32 } from "./meta32";
export declare class SavedQueryRestApiGet extends SpeakeasyBase {
    createdBy?: Meta31;
    database?: Meta32;
    description?: string;
    id?: number;
    label?: string;
    schema?: string;
    sql?: string;
    sqlTables?: any;
}
