import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContactInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fax" })
  fax?: string;

  @Metadata({ data: "json, name=isPreferred" })
  isPreferred?: boolean;

  @Metadata({ data: "json, name=isWebAddress" })
  isWebAddress?: boolean;

  @Metadata({ data: "json, name=line1" })
  line1?: string;

  @Metadata({ data: "json, name=line2" })
  line2?: string;

  @Metadata({ data: "json, name=line3" })
  line3?: string;

  @Metadata({ data: "json, name=line4" })
  line4?: string;

  @Metadata({ data: "json, name=line5" })
  line5?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=postcode" })
  postcode?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=typeDescription" })
  typeDescription?: string;

  @Metadata({ data: "json, name=typeId" })
  typeId?: number;
}
