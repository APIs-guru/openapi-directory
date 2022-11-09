import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PayeeLocation } from "./payeelocation";


export class PayeeLocationResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=payee_location" })
  payeeLocation: PayeeLocation;
}


export class PayeeLocationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: PayeeLocationResponseData;
}
