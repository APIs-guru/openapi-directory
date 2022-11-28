import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NumberValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: string;
}
