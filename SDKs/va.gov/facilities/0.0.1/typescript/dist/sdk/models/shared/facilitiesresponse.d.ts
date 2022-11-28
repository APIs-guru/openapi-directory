import { SpeakeasyBase } from "../../../internal/utils";
import { Facility } from "./facility";
import { PageLinks } from "./pagelinks";
import { FacilitiesMetadata } from "./facilitiesmetadata";
export declare class FacilitiesResponse extends SpeakeasyBase {
    data?: Facility[];
    links: PageLinks;
    meta: FacilitiesMetadata;
}
