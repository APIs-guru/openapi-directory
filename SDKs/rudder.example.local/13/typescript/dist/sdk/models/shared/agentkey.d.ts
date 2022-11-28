import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AgentKeyStatusEnum {
    Certified = "certified",
    Undefined = "undefined"
}
/**
 * Information about agent key or certificate
**/
export declare class AgentKey extends SpeakeasyBase {
    status?: AgentKeyStatusEnum;
    value: string;
}
