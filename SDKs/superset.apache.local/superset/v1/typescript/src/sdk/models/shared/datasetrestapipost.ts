import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DatasetRestApiPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database: number;

  @Metadata({ data: "json, name=owners" })
  owners?: number[];

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=table_name" })
  tableName: string;
}
