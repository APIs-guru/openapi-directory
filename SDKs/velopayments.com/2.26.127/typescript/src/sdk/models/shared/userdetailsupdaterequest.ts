import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MfaTypeEnum } from "./mfatypeenum";


// UserDetailsUpdateRequest
/** 
 * <p>All properties are optional</p>
 * <p>Only provided properties will be updated</p>
 * <p>Use null to null out a property that is allowed to be nullable</p>
 * 
**/
export class UserDetailsUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=mfaType" })
  mfaType?: MfaTypeEnum;

  @Metadata({ data: "json, name=primaryContactNumber" })
  primaryContactNumber?: string;

  @Metadata({ data: "json, name=secondaryContactNumber" })
  secondaryContactNumber?: string;

  @Metadata({ data: "json, name=smsNumber" })
  smsNumber?: string;

  @Metadata({ data: "json, name=verificationCode" })
  verificationCode?: string;
}
