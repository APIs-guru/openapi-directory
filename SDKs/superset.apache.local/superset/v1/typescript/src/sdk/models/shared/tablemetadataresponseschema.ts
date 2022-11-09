import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableMetadataColumnsResponse } from "./tablemetadatacolumnsresponse";
import { TableMetadataForeignKeysIndexesResponse } from "./tablemetadataforeignkeysindexesresponse";
import { TableMetadataForeignKeysIndexesResponse } from "./tablemetadataforeignkeysindexesresponse";
import { TableMetadataPrimaryKeyResponse } from "./tablemetadataprimarykeyresponse";


export class TableMetadataResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns", elemType: shared.TableMetadataColumnsResponse })
  columns?: TableMetadataColumnsResponse[];

  @Metadata({ data: "json, name=foreignKeys", elemType: shared.TableMetadataForeignKeysIndexesResponse })
  foreignKeys?: TableMetadataForeignKeysIndexesResponse[];

  @Metadata({ data: "json, name=indexes", elemType: shared.TableMetadataForeignKeysIndexesResponse })
  indexes?: TableMetadataForeignKeysIndexesResponse[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primaryKey" })
  primaryKey?: TableMetadataPrimaryKeyResponse;

  @Metadata({ data: "json, name=selectStar" })
  selectStar?: string;
}
