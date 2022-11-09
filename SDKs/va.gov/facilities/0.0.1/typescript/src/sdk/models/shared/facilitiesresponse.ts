import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Facility } from "./facility";
import { PageLinks } from "./pagelinks";
import { FacilitiesMetadata } from "./facilitiesmetadata";


export class FacilitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Facility })
  data?: Facility[];

  @Metadata({ data: "json, name=links" })
  links: PageLinks;

  @Metadata({ data: "json, name=meta" })
  meta: FacilitiesMetadata;
}
