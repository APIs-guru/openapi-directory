import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";



export class CampaignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Campaign;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
