import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterValue } from "./filtervalue";


// SegmentFilter
/** 
 * A query filter to search for appointment segments by.
**/
export class SegmentFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=service_variation_id" })
  serviceVariationId: string;

  @Metadata({ data: "json, name=team_member_id_filter" })
  teamMemberIdFilter?: FilterValue;
}
