import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";



export class DeliveryLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=schemeAgencyId" })
  schemeAgencyId?: string;

  @SpeakeasyMetadata({ data: "json, name=schemeId" })
  schemeId?: string;
}


export class Delivery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actualDate" })
  actualDate?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: DeliveryLocation;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
