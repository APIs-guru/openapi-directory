import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TensorflowResourceHandleProto
/** 
 * Protocol buffer representing a handle to a tensorflow resource. Handles are
 * not valid across executions, but can be serialized back and forth from within
 * a single run.
**/
export class TensorflowResourceHandleProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=container" })
  container?: string;

  @Metadata({ data: "json, name=device" })
  device?: string;

  @Metadata({ data: "json, name=hash_code" })
  hashCode?: string;

  @Metadata({ data: "json, name=maybe_type_name" })
  maybeTypeName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
