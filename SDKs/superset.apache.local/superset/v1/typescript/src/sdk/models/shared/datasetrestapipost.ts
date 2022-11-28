import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DatasetRestApiPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database" })
  database: number;

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: number[];

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=table_name" })
  tableName: string;
}
