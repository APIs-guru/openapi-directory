import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TensorflowResourceHandleProto
/** 
 * Protocol buffer representing a handle to a tensorflow resource. Handles are
 * not valid across executions, but can be serialized back and forth from within
 * a single run.
**/
export class TensorflowResourceHandleProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "json, name=hash_code" })
  hashCode?: string;

  @SpeakeasyMetadata({ data: "json, name=maybe_type_name" })
  maybeTypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
