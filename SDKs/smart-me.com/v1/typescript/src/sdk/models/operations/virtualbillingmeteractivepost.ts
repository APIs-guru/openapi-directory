import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualBillingMeterActivePostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  vMeterToActivate?: shared.VMeterToActivate;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  vMeterToActivate1?: shared.VMeterToActivate;

  @Metadata({ data: "request, media_type=text/json" })
  vMeterToActivate2?: shared.VMeterToActivate;
}


export class VirtualBillingMeterActivePostRequest extends SpeakeasyBase {
  @Metadata()
  request: VirtualBillingMeterActivePostRequests;
}


export class VirtualBillingMeterActivePostResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  device?: shared.Device;

  @Metadata()
  statusCode: number;
}
