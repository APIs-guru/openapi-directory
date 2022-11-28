import { SpeakeasyBase } from "../../../internal/utils";
import { Meta22 } from "./meta22";
import { Meta23 } from "./meta23";
import { Meta25 } from "./meta25";
import { Meta24 } from "./meta24";
export declare class DatasetRestApiGet extends SpeakeasyBase {
    cacheTimeout?: number;
    columns: Meta22;
    database: Meta23;
    datasourceType?: any;
    defaultEndpoint?: string;
    description?: string;
    extra?: string;
    fetchValuesPredicate?: string;
    filterSelectEnabled?: boolean;
    id?: number;
    isSqllabView?: boolean;
    mainDttmCol?: string;
    metrics: Meta25;
    offset?: number;
    owners?: Meta24;
    schema?: string;
    sql?: string;
    tableName: string;
    templateParams?: string;
    url?: any;
}
