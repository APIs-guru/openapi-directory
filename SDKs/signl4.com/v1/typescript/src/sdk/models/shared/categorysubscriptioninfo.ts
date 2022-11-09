import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CategorySubscriptionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
