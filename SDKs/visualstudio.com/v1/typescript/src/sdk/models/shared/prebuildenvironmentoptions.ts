import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PrebuildEnvironmentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=correlationId" })
  correlationId?: string;
}
