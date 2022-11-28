import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PhoneNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}
