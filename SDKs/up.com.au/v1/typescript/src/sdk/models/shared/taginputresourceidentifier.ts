import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagInputResourceIdentifier
/** 
 * Uniquely identifies a single tag in the API.
 * 
**/
export class TagInputResourceIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
