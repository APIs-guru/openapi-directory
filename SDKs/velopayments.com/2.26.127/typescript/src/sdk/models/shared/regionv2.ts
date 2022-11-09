import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegionV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
