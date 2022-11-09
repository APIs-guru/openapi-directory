import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MeterFolderInformationPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  meterFolderInformationToPost?: shared.MeterFolderInformationToPost;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  meterFolderInformationToPost1?: shared.MeterFolderInformationToPost;

  @Metadata({ data: "request, media_type=text/json" })
  meterFolderInformationToPost2?: shared.MeterFolderInformationToPost;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class MeterFolderInformationPostRequest extends SpeakeasyBase {
  @Metadata()
  request: MeterFolderInformationPostRequests;
}


export class MeterFolderInformationPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
