import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualBillingMeterActivePostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  vMeterToActivate?: shared.VMeterToActivate;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  vMeterToActivate1?: shared.VMeterToActivate;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  vMeterToActivate2?: shared.VMeterToActivate;
}


export class VirtualBillingMeterActivePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: VirtualBillingMeterActivePostRequests;
}


export class VirtualBillingMeterActivePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  device?: shared.Device;

  @SpeakeasyMetadata()
  statusCode: number;
}
