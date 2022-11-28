import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PrepaidSettingsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topUpAmount" })
  topUpAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=topUpEnabled" })
  topUpEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=topUpLimit" })
  topUpLimit?: number;
}
