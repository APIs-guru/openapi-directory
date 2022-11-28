import { SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";
/**
 * Represents background check details
**/
export declare class CheckDetails extends SpeakeasyBase {
    checkId: string;
    dataSet: string;
    databaseName: string;
    group: any;
    id: string;
    result: any;
    score: number;
    tables: Table[];
}
