import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessTokenValidationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=otp" })
  otp: string;
}
