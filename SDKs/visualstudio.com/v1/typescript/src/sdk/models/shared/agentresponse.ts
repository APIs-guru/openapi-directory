import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AgentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetUri" })
  assetUri?: string;

  @Metadata({ data: "json, name=family" })
  family?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
