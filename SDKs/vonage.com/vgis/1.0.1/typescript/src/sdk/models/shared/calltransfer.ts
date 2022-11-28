import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CallTransfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber: string;
}
