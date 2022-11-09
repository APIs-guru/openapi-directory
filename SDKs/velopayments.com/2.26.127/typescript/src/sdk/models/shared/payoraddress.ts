import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PayorAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city: string;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=countyOrProvince" })
  countyOrProvince?: string;

  @Metadata({ data: "json, name=line1" })
  line1: string;

  @Metadata({ data: "json, name=line2" })
  line2?: string;

  @Metadata({ data: "json, name=line3" })
  line3?: string;

  @Metadata({ data: "json, name=line4" })
  line4?: string;

  @Metadata({ data: "json, name=zipOrPostcode" })
  zipOrPostcode?: string;
}
