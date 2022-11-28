import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnpackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: any;
}


export class UnpackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unpack200WildcardBinaryString?: Uint8Array;
}
