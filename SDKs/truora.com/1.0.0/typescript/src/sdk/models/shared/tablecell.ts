import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TableCell
/** 
 * Represents a table cell
**/
export class TableCell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
