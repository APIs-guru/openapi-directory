import { SpeakeasyBase } from "../../../internal/utils";
import { Meta19 } from "./meta19";
import { Meta21 } from "./meta21";
import { Meta20 } from "./meta20";
export declare class DatasetRestApiGetList extends SpeakeasyBase {
    changedBy?: Meta19;
    changedByName?: any;
    changedByUrl?: any;
    changedOnDeltaHumanized?: any;
    changedOnUtc?: any;
    database: Meta21;
    defaultEndpoint?: string;
    exploreUrl?: any;
    extra?: string;
    id?: number;
    kind?: any;
    owners?: Meta20;
    schema?: string;
    sql?: string;
    tableName: string;
}
