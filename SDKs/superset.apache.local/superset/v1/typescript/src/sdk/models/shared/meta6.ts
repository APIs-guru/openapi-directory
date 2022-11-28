import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Meta6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default_endpoint" })
  defaultEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=table_name" })
  tableName: string;
}
