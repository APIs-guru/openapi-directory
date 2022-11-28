import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=address_2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=address_3" })
  address3?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
