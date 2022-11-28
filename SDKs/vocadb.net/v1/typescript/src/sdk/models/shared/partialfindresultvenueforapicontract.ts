import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VenueForApiContract } from "./venueforapicontract";



export class PartialFindResultVenueForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: VenueForApiContract })
  items?: VenueForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
