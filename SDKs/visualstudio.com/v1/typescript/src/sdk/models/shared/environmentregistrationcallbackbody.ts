import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentRegistrationCallbackPayloadBody } from "./environmentregistrationcallbackpayloadbody";


export class EnvironmentRegistrationCallbackBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=payload" })
  payload?: EnvironmentRegistrationCallbackPayloadBody;

  @Metadata({ data: "json, name=type" })
  type: string;
}
