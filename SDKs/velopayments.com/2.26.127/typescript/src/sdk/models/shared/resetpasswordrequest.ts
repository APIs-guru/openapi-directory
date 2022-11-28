import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResetPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}
