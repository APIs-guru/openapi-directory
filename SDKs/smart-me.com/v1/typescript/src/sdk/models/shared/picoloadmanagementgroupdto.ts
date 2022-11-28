import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PicoLoadmanagementGroupDto
/** 
 * DTO for the pico loadmanagement group
**/
export class PicoLoadmanagementGroupDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxCurrent" })
  maxCurrent?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfStations" })
  numberOfStations?: number;
}
