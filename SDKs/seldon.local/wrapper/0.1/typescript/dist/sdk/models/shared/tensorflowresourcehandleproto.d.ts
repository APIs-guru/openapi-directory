import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Protocol buffer representing a handle to a tensorflow resource. Handles are
 * not valid across executions, but can be serialized back and forth from within
 * a single run.
**/
export declare class TensorflowResourceHandleProto extends SpeakeasyBase {
    container?: string;
    device?: string;
    hashCode?: string;
    maybeTypeName?: string;
    name?: string;
}
