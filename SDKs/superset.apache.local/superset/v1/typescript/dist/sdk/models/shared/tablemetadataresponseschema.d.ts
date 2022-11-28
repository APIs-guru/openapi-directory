import { SpeakeasyBase } from "../../../internal/utils";
import { TableMetadataColumnsResponse } from "./tablemetadatacolumnsresponse";
import { TableMetadataForeignKeysIndexesResponse } from "./tablemetadataforeignkeysindexesresponse";
import { TableMetadataPrimaryKeyResponse } from "./tablemetadataprimarykeyresponse";
export declare class TableMetadataResponseSchema extends SpeakeasyBase {
    columns?: TableMetadataColumnsResponse[];
    foreignKeys?: TableMetadataForeignKeysIndexesResponse[];
    indexes?: TableMetadataForeignKeysIndexesResponse[];
    name?: string;
    primaryKey?: TableMetadataPrimaryKeyResponse;
    selectStar?: string;
}
