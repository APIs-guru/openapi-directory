import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrackingNumberResponse
/** 
 * The Tracking Number Response model
**/
export class TrackingNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trackingNumber" })
  trackingNumber?: string;
}
