import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Data } from "./data";


export class BatchData extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Data;

  @Metadata({ data: "json, name=template" })
  template?: number;
}
