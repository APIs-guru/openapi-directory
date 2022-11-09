import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InvitePayeeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=payorId" })
  payorId: string;
}
