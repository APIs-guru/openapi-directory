import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Campaign } from "./campaign";


export class CampaignResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Campaign;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
