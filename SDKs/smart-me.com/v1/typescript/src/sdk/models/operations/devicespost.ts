import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DevicesPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  deviceToPost?: shared.DeviceToPost;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  deviceToPost1?: shared.DeviceToPost;

  @Metadata({ data: "request, media_type=text/json" })
  deviceToPost2?: shared.DeviceToPost;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class DevicesPostRequest extends SpeakeasyBase {
  @Metadata()
  request: DevicesPostRequests;
}


export class DevicesPostResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  deviceToPost?: shared.DeviceToPost;

  @Metadata()
  statusCode: number;
}
