import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MfaTypeEnum } from "./mfatypeenum";


export class MfaDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=mfa_type" })
  mfaType?: MfaTypeEnum;

  @Metadata({ data: "json, name=verified" })
  verified?: boolean;
}
