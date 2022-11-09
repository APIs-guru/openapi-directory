import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnpackRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: any;
}


export class UnpackResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  unpack200WildcardBinaryString?: Uint8Array;
}
