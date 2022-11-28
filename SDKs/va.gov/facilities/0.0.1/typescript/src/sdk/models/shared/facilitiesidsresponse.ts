import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FacilitiesIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string[];
}
