import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Meta27 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database_name" })
  databaseName: string;
}
