import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Color extends SpeakeasyBase {
  @Metadata({ data: "json, name=alpha" })
  alpha: number;

  @Metadata({ data: "json, name=blue" })
  blue: number;

  @Metadata({ data: "json, name=green" })
  green: number;

  @Metadata({ data: "json, name=red" })
  red: number;
}
