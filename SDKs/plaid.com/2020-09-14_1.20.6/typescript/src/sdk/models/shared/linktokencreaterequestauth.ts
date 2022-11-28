import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LinkTokenCreateRequestAuthFlowTypeEnum {
    FlexibleAuth = "FLEXIBLE_AUTH"
}


// LinkTokenCreateRequestAuth
/** 
 * Specifies options for initializing Link for use with the Auth product. This field is currently only required if using the Flexible Auth product (currently in closed beta).
**/
export class LinkTokenCreateRequestAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flow_type" })
  flowType: LinkTokenCreateRequestAuthFlowTypeEnum;
}
