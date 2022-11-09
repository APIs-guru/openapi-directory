import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=address_1" })
  address1?: string;

  @Metadata({ data: "json, name=address_2" })
  address2?: string;

  @Metadata({ data: "json, name=address_3" })
  address3?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
