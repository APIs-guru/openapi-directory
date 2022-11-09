import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxProcessorTokenCreateRequestOptions
/** 
 * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
**/
export class SandboxProcessorTokenCreateRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=override_password" })
  overridePassword?: string;

  @Metadata({ data: "json, name=override_username" })
  overrideUsername?: string;
}
