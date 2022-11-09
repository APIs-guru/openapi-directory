import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Database
/** 
 * Represents a database as well as an hourly status
**/
export class Database extends SpeakeasyBase {
  @Metadata({ data: "json, name=data_sets" })
  dataSets?: string[];

  @Metadata({ data: "json, name=database_id" })
  databaseId?: string;

  @Metadata({ data: "json, name=database_name" })
  databaseName?: string;

  @Metadata({ data: "json, name=hourly_status" })
  hourlyStatus?: string[];
}
