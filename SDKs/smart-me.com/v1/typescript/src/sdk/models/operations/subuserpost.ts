import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubUserPostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  subUserData?: shared.SubUserData;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  subUserData1?: shared.SubUserData;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  subUserData2?: shared.SubUserData;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class SubUserPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SubUserPostRequests;
}


export class SubUserPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
