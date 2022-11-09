import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CellLocation } from "./celllocation";
import { EntityObject } from "./entityobject";


// Attributes
/** 
 * Contains additional attributes related to the task parameter. If the task parameter is table, the row and column IDs for the detected text are returned. If the task parameter is contact, the detected entity tags will be returned.
**/
export class Attributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cellLocation" })
  cellLocation?: CellLocation;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=pageNumber" })
  pageNumber?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=value" })
  value?: EntityObject;
}
