import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Tensor extends SpeakeasyBase {
  @Metadata({ data: "json, name=shape" })
  shape?: number[];

  @Metadata({ data: "json, name=values" })
  values?: number[];
}
