import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableMetadataOptionsResponse } from "./tablemetadataoptionsresponse";


export class TableMetadataForeignKeysIndexesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_names" })
  columnNames?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=options" })
  options?: TableMetadataOptionsResponse;

  @Metadata({ data: "json, name=referred_columns" })
  referredColumns?: string[];

  @Metadata({ data: "json, name=referred_schema" })
  referredSchema?: string;

  @Metadata({ data: "json, name=referred_table" })
  referredTable?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
