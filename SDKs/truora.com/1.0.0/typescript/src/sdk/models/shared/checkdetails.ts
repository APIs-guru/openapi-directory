import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Table } from "./table";


// CheckDetails
/** 
 * Represents background check details
**/
export class CheckDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=check_id" })
  checkId: string;

  @Metadata({ data: "json, name=data_set" })
  dataSet: string;

  @Metadata({ data: "json, name=database_name" })
  databaseName: string;

  @Metadata({ data: "json, name=group" })
  group: any;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=result" })
  result: any;

  @Metadata({ data: "json, name=score" })
  score: number;

  @Metadata({ data: "json, name=tables", elemType: shared.Table })
  tables: Table[];
}
