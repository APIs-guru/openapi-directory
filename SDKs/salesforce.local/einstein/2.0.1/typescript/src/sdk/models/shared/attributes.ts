import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CellLocation } from "./celllocation";
import { EntityObject } from "./entityobject";



// Attributes
/** 
 * Contains additional attributes related to the task parameter. If the task parameter is table, the row and column IDs for the detected text are returned. If the task parameter is contact, the detected entity tags will be returned.
**/
export class Attributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cellLocation" })
  cellLocation?: CellLocation;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: EntityObject;
}
