import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupConfiguration
/** 
 * The deserialized form of the <b>Energy Footprint Update</b> service's request payload.
**/
export class GroupConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=co2Emission" })
  co2Emission?: number;

  @SpeakeasyMetadata({ data: "json, name=energyCost" })
  energyCost?: number;

  @SpeakeasyMetadata({ data: "json, name=groupNameFilter" })
  groupNameFilter?: string;
}
