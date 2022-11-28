import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableRow } from "./tablerow";



// Table
/** 
 * Represents a table to lay out search results
**/
export class Table extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rows", elemType: TableRow })
  rows: TableRow[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
