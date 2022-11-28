import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Meta30 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database_name" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
