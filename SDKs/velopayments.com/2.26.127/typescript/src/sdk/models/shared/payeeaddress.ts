import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PayeeAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=countyOrProvince" })
  countyOrProvince?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=line3" })
  line3?: string;

  @SpeakeasyMetadata({ data: "json, name=line4" })
  line4?: string;

  @SpeakeasyMetadata({ data: "json, name=zipOrPostcode" })
  zipOrPostcode?: string;
}
