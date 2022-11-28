import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CellLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colIndex" })
  colIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=rowIndex" })
  rowIndex?: number;
}
