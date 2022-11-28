import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Promoter
/** 
 * Promoter
**/
export class Promoter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descriptions" })
  descriptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: Map<string, string>;
}
