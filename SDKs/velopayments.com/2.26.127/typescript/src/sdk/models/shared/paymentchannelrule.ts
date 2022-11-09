import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentChannelRule
/** 
 * Rules that will get applied when creating or updating a payment channel for the given country
**/
export class PaymentChannelRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName: string;

  @Metadata({ data: "json, name=displayOrder" })
  displayOrder?: number;

  @Metadata({ data: "json, name=element" })
  element: string;

  @Metadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @Metadata({ data: "json, name=minLength" })
  minLength?: number;

  @Metadata({ data: "json, name=required" })
  required: boolean;

  @Metadata({ data: "json, name=validation" })
  validation: string;
}
