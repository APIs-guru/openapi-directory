import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NumberValidation extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=number" })
  number: string;
}
