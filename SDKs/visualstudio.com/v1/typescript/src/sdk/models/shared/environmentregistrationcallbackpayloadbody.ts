import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnvironmentRegistrationCallbackPayloadBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionPath" })
  sessionPath?: string;
}
