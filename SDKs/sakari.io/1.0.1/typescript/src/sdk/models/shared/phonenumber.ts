import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PhoneNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;
}
