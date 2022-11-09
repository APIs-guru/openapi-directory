import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CallTransfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber: string;
}
