import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TableMetadataPrimaryKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_names" })
  columnNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
