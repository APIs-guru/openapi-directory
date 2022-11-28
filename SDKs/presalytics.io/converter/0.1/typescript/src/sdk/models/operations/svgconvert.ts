import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SvgconvertFileToConvertFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class SvgconvertFileToConvert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: SvgconvertFileToConvertFile;
}


export class SvgconvertFileUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blob_name" })
  blobName?: string;

  @SpeakeasyMetadata({ data: "json, name=blob_url" })
  blobUrl?: string;
}


export class SvgconvertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: SvgconvertFileToConvert;
}


export class SvgconvertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileUrl?: SvgconvertFileUrl;

  @SpeakeasyMetadata()
  statusCode: number;
}
