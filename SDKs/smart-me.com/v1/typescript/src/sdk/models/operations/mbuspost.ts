import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MBusPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  mBusData?: shared.MBusData;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  mBusData1?: shared.MBusData;

  @Metadata({ data: "request, media_type=text/json" })
  mBusData2?: shared.MBusData;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class MBusPostRequest extends SpeakeasyBase {
  @Metadata()
  request: MBusPostRequests;
}


export class MBusPostResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
