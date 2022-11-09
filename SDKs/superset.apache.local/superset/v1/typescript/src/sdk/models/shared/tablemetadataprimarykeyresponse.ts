import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TableMetadataPrimaryKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_names" })
  columnNames?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
