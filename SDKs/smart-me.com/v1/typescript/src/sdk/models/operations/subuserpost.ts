import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubUserPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  subUserData?: shared.SubUserData;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  subUserData1?: shared.SubUserData;

  @Metadata({ data: "request, media_type=text/json" })
  subUserData2?: shared.SubUserData;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class SubUserPostRequest extends SpeakeasyBase {
  @Metadata()
  request: SubUserPostRequests;
}


export class SubUserPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
