import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Facility } from "./facility";


export class FacilityReadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Facility;
}
