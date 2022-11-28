import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CategorySubscriptionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
