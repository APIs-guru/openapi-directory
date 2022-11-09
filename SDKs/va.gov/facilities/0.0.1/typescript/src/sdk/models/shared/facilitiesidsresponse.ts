import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FacilitiesIdsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string[];
}
