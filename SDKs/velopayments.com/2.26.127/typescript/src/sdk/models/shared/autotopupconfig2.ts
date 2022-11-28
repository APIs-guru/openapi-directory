import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AutoTopUpConfig2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=fundingAccountId" })
  fundingAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=minBalance" })
  minBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=targetBalance" })
  targetBalance?: number;
}
