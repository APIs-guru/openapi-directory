import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvitePayeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId: string;
}
