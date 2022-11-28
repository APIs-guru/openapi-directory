import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegionV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
