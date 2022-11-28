import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableMetadataColumnsResponse } from "./tablemetadatacolumnsresponse";
import { TableMetadataForeignKeysIndexesResponse } from "./tablemetadataforeignkeysindexesresponse";
import { TableMetadataPrimaryKeyResponse } from "./tablemetadataprimarykeyresponse";



export class TableMetadataResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns", elemType: TableMetadataColumnsResponse })
  columns?: TableMetadataColumnsResponse[];

  @SpeakeasyMetadata({ data: "json, name=foreignKeys", elemType: TableMetadataForeignKeysIndexesResponse })
  foreignKeys?: TableMetadataForeignKeysIndexesResponse[];

  @SpeakeasyMetadata({ data: "json, name=indexes", elemType: TableMetadataForeignKeysIndexesResponse })
  indexes?: TableMetadataForeignKeysIndexesResponse[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryKey" })
  primaryKey?: TableMetadataPrimaryKeyResponse;

  @SpeakeasyMetadata({ data: "json, name=selectStar" })
  selectStar?: string;
}
