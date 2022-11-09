import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Template
/** 
 * Template object
**/
export class Template extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=modified" })
  modified?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: boolean;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
