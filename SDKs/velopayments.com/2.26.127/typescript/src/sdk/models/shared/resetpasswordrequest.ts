import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResetPasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;
}
