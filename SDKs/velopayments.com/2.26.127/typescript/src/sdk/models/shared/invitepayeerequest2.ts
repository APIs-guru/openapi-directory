import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvitePayeeRequest2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId: string;
}
