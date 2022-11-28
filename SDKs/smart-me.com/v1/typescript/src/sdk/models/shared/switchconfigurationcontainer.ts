import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SwitchConfigurationContainer
/** 
 * The configuration for a phase switch
**/
export class SwitchConfigurationContainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CanSwitchOff" })
  canSwitchOff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: number;
}
