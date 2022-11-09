import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Snmp2cConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=community_string" })
  communityString?: string;
}
