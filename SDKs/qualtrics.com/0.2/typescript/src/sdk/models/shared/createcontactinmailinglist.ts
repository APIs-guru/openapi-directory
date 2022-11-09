import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateContactInMailingList extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=unsubscribed" })
  unsubscribed?: boolean;
}
