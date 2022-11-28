import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Facility } from "./facility";
import { PageLinks } from "./pagelinks";
import { FacilitiesMetadata } from "./facilitiesmetadata";



export class FacilitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Facility })
  data?: Facility[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: PageLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: FacilitiesMetadata;
}
