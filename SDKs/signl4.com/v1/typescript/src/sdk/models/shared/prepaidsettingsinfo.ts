import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PrepaidSettingsInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=topUpAmount" })
  topUpAmount?: number;

  @Metadata({ data: "json, name=topUpEnabled" })
  topUpEnabled?: boolean;

  @Metadata({ data: "json, name=topUpLimit" })
  topUpLimit?: number;
}
