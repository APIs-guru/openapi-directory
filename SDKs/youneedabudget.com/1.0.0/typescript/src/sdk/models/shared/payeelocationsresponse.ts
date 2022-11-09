import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PayeeLocation } from "./payeelocation";


export class PayeeLocationsResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=payee_locations", elemType: shared.PayeeLocation })
  payeeLocations: PayeeLocation[];
}


export class PayeeLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: PayeeLocationsResponseData;
}
