import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxProcessorTokenCreateRequestOptions
/** 
 * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
**/
export class SandboxProcessorTokenCreateRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=override_password" })
  overridePassword?: string;

  @SpeakeasyMetadata({ data: "json, name=override_username" })
  overrideUsername?: string;
}
