import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeterFolderInformationPostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  meterFolderInformationToPost?: shared.MeterFolderInformationToPost;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  meterFolderInformationToPost1?: shared.MeterFolderInformationToPost;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  meterFolderInformationToPost2?: shared.MeterFolderInformationToPost;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class MeterFolderInformationPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: MeterFolderInformationPostRequests;
}


export class MeterFolderInformationPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
