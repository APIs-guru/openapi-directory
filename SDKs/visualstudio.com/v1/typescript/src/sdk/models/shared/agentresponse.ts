import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetUri" })
  assetUri?: string;

  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
