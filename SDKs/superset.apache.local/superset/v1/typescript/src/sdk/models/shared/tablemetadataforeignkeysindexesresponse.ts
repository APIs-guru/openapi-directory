import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableMetadataOptionsResponse } from "./tablemetadataoptionsresponse";



export class TableMetadataForeignKeysIndexesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_names" })
  columnNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: TableMetadataOptionsResponse;

  @SpeakeasyMetadata({ data: "json, name=referred_columns" })
  referredColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=referred_schema" })
  referredSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=referred_table" })
  referredTable?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
