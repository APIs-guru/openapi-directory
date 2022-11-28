import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Source
/** 
 * Source
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
