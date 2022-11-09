import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Meta32 extends SpeakeasyBase {
  @Metadata({ data: "json, name=database_name" })
  databaseName: string;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
