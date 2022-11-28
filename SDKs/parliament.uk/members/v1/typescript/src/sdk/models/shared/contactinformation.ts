import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContactInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: string;

  @SpeakeasyMetadata({ data: "json, name=isPreferred" })
  isPreferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isWebAddress" })
  isWebAddress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=line3" })
  line3?: string;

  @SpeakeasyMetadata({ data: "json, name=line4" })
  line4?: string;

  @SpeakeasyMetadata({ data: "json, name=line5" })
  line5?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=postcode" })
  postcode?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=typeDescription" })
  typeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=typeId" })
  typeId?: number;
}
