import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayeeLocation } from "./payeelocation";



export class PayeeLocationResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payee_location" })
  payeeLocation: PayeeLocation;
}


export class PayeeLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: PayeeLocationResponseData;
}
