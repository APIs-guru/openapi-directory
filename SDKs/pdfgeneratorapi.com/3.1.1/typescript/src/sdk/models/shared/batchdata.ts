import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Data } from "./data";



export class BatchData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Data;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: number;
}
