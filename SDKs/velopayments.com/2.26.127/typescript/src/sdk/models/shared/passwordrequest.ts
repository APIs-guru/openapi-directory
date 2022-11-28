import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
