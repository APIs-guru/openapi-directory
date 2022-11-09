import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SwitchConfigurationContainer
/** 
 * The configuration for a phase switch
**/
export class SwitchConfigurationContainer extends SpeakeasyBase {
  @Metadata({ data: "json, name=CanSwitchOff" })
  canSwitchOff?: boolean;

  @Metadata({ data: "json, name=Number" })
  number?: number;
}
