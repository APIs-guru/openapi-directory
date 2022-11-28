import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Database
/** 
 * Represents a database as well as an hourly status
**/
export class Database extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data_sets" })
  dataSets?: string[];

  @SpeakeasyMetadata({ data: "json, name=database_id" })
  databaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=database_name" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=hourly_status" })
  hourlyStatus?: string[];
}
