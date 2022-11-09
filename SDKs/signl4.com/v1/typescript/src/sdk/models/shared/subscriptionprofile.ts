import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
