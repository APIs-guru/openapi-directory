import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableCell } from "./tablecell";


// TableRow
/** 
 * A table row, containing one or more cells
**/
export class TableRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=cells", elemType: shared.TableCell })
  cells: TableCell[];
}
