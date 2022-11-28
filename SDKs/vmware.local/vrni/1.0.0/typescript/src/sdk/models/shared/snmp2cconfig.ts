import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Snmp2cConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=community_string" })
  communityString?: string;
}
