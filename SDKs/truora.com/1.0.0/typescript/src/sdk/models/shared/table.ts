import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableRow } from "./tablerow";


// Table
/** 
 * Represents a table to lay out search results
**/
export class Table extends SpeakeasyBase {
  @Metadata({ data: "json, name=rows", elemType: shared.TableRow })
  rows: TableRow[];

  @Metadata({ data: "json, name=title" })
  title: string;
}
