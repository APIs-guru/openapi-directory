import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Facility } from "./facility";



export class FacilityReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Facility;
}
