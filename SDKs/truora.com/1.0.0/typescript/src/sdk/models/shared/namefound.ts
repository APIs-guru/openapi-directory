import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NameFound
/** 
 * Represents names found during the process
**/
export class NameFound extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=first_name" })
  firstName: string;

  @Metadata({ data: "json, name=last_name" })
  lastName: string;
}
