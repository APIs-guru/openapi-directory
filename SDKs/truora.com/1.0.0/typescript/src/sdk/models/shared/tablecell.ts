import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TableCell
/** 
 * Represents a table cell
**/
export class TableCell extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
