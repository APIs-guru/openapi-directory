import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PicoLoadmanagementGroupDto
/** 
 * DTO for the pico loadmanagement group
**/
export class PicoLoadmanagementGroupDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=MaxCurrent" })
  maxCurrent?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NumberOfStations" })
  numberOfStations?: number;
}
