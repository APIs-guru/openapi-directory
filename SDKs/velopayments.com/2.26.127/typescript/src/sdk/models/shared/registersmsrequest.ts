import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterSmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=smsNumber" })
  smsNumber: string;
}
