import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CellLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=colIndex" })
  colIndex?: number;

  @Metadata({ data: "json, name=rowIndex" })
  rowIndex?: number;
}
