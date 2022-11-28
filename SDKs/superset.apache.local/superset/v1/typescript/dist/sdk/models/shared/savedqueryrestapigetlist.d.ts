import { SpeakeasyBase } from "../../../internal/utils";
import { Meta29 } from "./meta29";
import { Meta30 } from "./meta30";
export declare class SavedQueryRestApiGetList extends SpeakeasyBase {
    changedOnDeltaHumanized?: any;
    createdBy?: Meta29;
    createdOn?: Date;
    database?: Meta30;
    dbId?: number;
    description?: string;
    extra?: any;
    id?: number;
    label?: string;
    lastRunDeltaHumanized?: any;
    rows?: number;
    schema?: string;
    sql?: string;
    sqlTables?: any;
}
