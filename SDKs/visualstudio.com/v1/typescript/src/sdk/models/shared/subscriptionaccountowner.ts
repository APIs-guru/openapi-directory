import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionAccountOwner extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=puid" })
  puid?: string;
}
