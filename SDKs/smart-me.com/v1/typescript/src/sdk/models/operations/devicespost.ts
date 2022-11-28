import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DevicesPostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  deviceToPost?: shared.DeviceToPost;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  deviceToPost1?: shared.DeviceToPost;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  deviceToPost2?: shared.DeviceToPost;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class DevicesPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: DevicesPostRequests;
}


export class DevicesPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceToPost?: shared.DeviceToPost;

  @SpeakeasyMetadata()
  statusCode: number;
}
