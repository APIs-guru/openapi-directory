import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Techniques extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=versions" })
  versions?: string[];
}
