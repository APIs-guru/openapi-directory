import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnvironmentRegistrationCallbackPayloadBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=sessionPath" })
  sessionPath?: string;
}
