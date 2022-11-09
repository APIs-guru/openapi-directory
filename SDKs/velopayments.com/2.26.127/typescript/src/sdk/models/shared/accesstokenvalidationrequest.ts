import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccessTokenValidationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=otp" })
  otp: string;
}
