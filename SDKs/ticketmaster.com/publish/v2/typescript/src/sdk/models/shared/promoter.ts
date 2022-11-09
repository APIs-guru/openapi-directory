import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Promoter
/** 
 * Promoter
**/
export class Promoter extends SpeakeasyBase {
  @Metadata({ data: "json, name=descriptions" })
  descriptions?: Map<string, string>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=names" })
  names?: Map<string, string>;
}
