import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContactIdentifiersMobile extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;
}


export class ContactIdentifiers extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=mobile" })
  mobile?: ContactIdentifiersMobile;
}
