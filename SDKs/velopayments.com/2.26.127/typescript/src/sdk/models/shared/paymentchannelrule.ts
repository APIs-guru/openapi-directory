import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentChannelRule
/** 
 * Rules that will get applied when creating or updating a payment channel for the given country
**/
export class PaymentChannelRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=displayOrder" })
  displayOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=element" })
  element: string;

  @SpeakeasyMetadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @SpeakeasyMetadata({ data: "json, name=minLength" })
  minLength?: number;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation: string;
}
