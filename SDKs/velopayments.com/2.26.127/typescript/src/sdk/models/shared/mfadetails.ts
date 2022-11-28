import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MfaTypeEnum } from "./mfatypeenum";



export class MfaDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mfa_type" })
  mfaType?: MfaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified?: boolean;
}
