import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MBusPostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  mBusData?: shared.MBusData;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  mBusData1?: shared.MBusData;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  mBusData2?: shared.MBusData;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class MBusPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: MBusPostRequests;
}


export class MBusPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
