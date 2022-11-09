import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AutoTopUpConfig2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=fundingAccountId" })
  fundingAccountId?: string;

  @Metadata({ data: "json, name=minBalance" })
  minBalance?: number;

  @Metadata({ data: "json, name=targetBalance" })
  targetBalance?: number;
}
