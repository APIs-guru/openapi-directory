import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterSmsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=smsNumber" })
  smsNumber: string;
}
