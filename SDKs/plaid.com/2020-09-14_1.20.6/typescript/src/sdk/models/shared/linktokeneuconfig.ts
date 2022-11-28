import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinkTokenEuConfig
/** 
 * Configuration parameters for EU flows
**/
export class LinkTokenEuConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headless" })
  headless?: boolean;
}
