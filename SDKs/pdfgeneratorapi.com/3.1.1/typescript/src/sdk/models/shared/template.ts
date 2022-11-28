import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Template
/** 
 * Template object
**/
export class Template extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
