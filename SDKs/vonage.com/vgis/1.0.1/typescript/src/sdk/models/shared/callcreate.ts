import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CallCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber: string;
}
