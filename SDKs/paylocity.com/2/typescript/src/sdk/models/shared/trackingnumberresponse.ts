import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrackingNumberResponse
/** 
 * The Tracking Number Response model
**/
export class TrackingNumberResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=trackingNumber" })
  trackingNumber?: string;
}
