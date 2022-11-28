import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PayeeUserSelfUpdateRequest
/** 
 * <p>All properties are optional</p>
 * <p>Only provided properties will be updated</p>
 * <p>Use null to null out a property that is allowed to be nullable</p>
 * 
**/
export class PayeeUserSelfUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContactNumber" })
  primaryContactNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryContactNumber" })
  secondaryContactNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=smsNumber" })
  smsNumber?: string;
}
