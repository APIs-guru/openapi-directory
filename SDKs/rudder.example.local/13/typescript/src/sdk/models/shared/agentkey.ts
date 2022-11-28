import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AgentKeyStatusEnum {
    Certified = "certified",
    Undefined = "undefined"
}


// AgentKey
/** 
 * Information about agent key or certificate
**/
export class AgentKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AgentKeyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
