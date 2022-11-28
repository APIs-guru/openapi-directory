import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagInputResourceIdentifier
/** 
 * Uniquely identifies a single tag in the API.
 * 
**/
export class TagInputResourceIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
