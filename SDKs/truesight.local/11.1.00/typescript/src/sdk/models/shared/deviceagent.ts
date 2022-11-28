import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceAgent
/** 
 * Contains all information regarding a specific PATROL Agent.
**/
export class DeviceAgent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectionStatus?: string;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  os?: string;

  @SpeakeasyMetadata()
  port?: string;

  @SpeakeasyMetadata()
  url?: string;

  @SpeakeasyMetadata()
  version?: string;
}
