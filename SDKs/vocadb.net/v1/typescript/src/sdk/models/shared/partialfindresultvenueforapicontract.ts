import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VenueForApiContract } from "./venueforapicontract";


export class PartialFindResultVenueForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.VenueForApiContract })
  items?: VenueForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
