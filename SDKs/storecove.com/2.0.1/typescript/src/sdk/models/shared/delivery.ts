import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";


export class DeliveryLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=schemeAgencyId" })
  schemeAgencyId?: string;

  @Metadata({ data: "json, name=schemeId" })
  schemeId?: string;
}


export class Delivery extends SpeakeasyBase {
  @Metadata({ data: "json, name=actualDate" })
  actualDate?: string;

  @Metadata({ data: "json, name=location" })
  location?: DeliveryLocation;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;
}
