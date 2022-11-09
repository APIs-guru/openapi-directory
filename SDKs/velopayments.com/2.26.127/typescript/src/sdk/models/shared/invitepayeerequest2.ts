import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InvitePayeeRequest2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=payorId" })
  payorId: string;
}
