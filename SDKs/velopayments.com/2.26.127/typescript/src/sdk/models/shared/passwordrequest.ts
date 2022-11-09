import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;
}
