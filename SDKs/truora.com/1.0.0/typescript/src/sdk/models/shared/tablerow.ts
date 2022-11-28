import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCell } from "./tablecell";



// TableRow
/** 
 * A table row, containing one or more cells
**/
export class TableRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cells", elemType: TableCell })
  cells: TableCell[];
}
