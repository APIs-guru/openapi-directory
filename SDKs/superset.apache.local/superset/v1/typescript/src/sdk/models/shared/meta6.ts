import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Meta6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=default_endpoint" })
  defaultEndpoint?: string;

  @Metadata({ data: "json, name=table_name" })
  tableName: string;
}
