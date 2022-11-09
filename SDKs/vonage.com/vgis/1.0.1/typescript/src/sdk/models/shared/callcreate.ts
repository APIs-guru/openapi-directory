import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CallCreate extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber: string;
}
