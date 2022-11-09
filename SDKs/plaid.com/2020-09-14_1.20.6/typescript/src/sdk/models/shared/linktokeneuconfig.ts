import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinkTokenEuConfig
/** 
 * Configuration parameters for EU flows
**/
export class LinkTokenEuConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=headless" })
  headless?: boolean;
}
