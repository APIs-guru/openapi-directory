import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AgentKeyStatusEnum {
    Certified = "certified"
,    Undefined = "undefined"
}


// AgentKey
/** 
 * Information about agent key or certificate
**/
export class AgentKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: AgentKeyStatusEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}
