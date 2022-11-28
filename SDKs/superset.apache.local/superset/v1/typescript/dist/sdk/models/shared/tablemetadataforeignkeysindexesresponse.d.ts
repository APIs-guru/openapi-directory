import { SpeakeasyBase } from "../../../internal/utils";
import { TableMetadataOptionsResponse } from "./tablemetadataoptionsresponse";
export declare class TableMetadataForeignKeysIndexesResponse extends SpeakeasyBase {
    columnNames?: string[];
    name?: string;
    options?: TableMetadataOptionsResponse;
    referredColumns?: string[];
    referredSchema?: string;
    referredTable?: string;
    type?: string;
}
