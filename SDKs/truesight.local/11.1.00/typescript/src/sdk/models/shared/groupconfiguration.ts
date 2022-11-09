import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupConfiguration
/** 
 * The deserialized form of the <b>Energy Footprint Update</b> service's request payload.
**/
export class GroupConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=co2Emission" })
  co2Emission?: number;

  @Metadata({ data: "json, name=energyCost" })
  energyCost?: number;

  @Metadata({ data: "json, name=groupNameFilter" })
  groupNameFilter?: string;
}
