import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StateEnum } from "./stateenum";


export class HomeAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressLine1" })
  addressLine1: string;

  @Metadata({ data: "json, name=AddressLine2" })
  addressLine2?: string;

  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=Region" })
  region?: StateEnum;
}
