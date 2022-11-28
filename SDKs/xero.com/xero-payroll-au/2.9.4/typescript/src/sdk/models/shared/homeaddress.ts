import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StateEnum } from "./stateenum";



export class HomeAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressLine1" })
  addressLine1: string;

  @SpeakeasyMetadata({ data: "json, name=AddressLine2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: StateEnum;
}
