import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PrebuildEnvironmentOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=correlationId" })
  correlationId?: string;
}
