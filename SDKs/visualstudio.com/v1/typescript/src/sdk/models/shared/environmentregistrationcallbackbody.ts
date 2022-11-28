import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentRegistrationCallbackPayloadBody } from "./environmentregistrationcallbackpayloadbody";



export class EnvironmentRegistrationCallbackBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: EnvironmentRegistrationCallbackPayloadBody;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
