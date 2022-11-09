import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PoolGroupResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=region" })
  region?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
