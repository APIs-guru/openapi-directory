import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateContactInMailingList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=unsubscribed" })
  unsubscribed?: boolean;
}
