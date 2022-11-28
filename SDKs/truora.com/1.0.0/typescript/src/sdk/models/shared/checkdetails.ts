import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";



// CheckDetails
/** 
 * Represents background check details
**/
export class CheckDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_id" })
  checkId: string;

  @SpeakeasyMetadata({ data: "json, name=data_set" })
  dataSet: string;

  @SpeakeasyMetadata({ data: "json, name=database_name" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group: any;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: any;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score: number;

  @SpeakeasyMetadata({ data: "json, name=tables", elemType: Table })
  tables: Table[];
}
