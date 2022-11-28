import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NameFound
/** 
 * Represents names found during the process
**/
export class NameFound extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;
}
