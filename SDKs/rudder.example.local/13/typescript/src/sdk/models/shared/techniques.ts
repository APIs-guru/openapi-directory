import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Techniques extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=versions" })
  versions?: string[];
}
