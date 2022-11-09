import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AutoTopUpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=minBalance" })
  minBalance?: number;

  @Metadata({ data: "json, name=targetBalance" })
  targetBalance?: number;
}
