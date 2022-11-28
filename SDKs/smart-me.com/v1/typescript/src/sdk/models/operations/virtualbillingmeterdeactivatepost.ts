import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualBillingMeterDeactivatePostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  vMeterToDeactivate?: shared.VMeterToDeactivate;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  vMeterToDeactivate1?: shared.VMeterToDeactivate;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  vMeterToDeactivate2?: shared.VMeterToDeactivate;
}


export class VirtualBillingMeterDeactivatePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: VirtualBillingMeterDeactivatePostRequests;
}


export class VirtualBillingMeterDeactivatePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
