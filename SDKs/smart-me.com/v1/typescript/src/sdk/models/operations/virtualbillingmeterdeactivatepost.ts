import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualBillingMeterDeactivatePostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  vMeterToDeactivate?: shared.VMeterToDeactivate;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  vMeterToDeactivate1?: shared.VMeterToDeactivate;

  @Metadata({ data: "request, media_type=text/json" })
  vMeterToDeactivate2?: shared.VMeterToDeactivate;
}


export class VirtualBillingMeterDeactivatePostRequest extends SpeakeasyBase {
  @Metadata()
  request: VirtualBillingMeterDeactivatePostRequests;
}


export class VirtualBillingMeterDeactivatePostResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
