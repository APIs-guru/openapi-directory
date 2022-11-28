import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayeeLocation } from "./payeelocation";



export class PayeeLocationsResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payee_locations", elemType: PayeeLocation })
  payeeLocations: PayeeLocation[];
}


export class PayeeLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: PayeeLocationsResponseData;
}
