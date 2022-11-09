import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Source
/** 
 * Source
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
