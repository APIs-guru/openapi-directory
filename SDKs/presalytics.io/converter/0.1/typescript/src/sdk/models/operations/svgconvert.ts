import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SvgconvertFileToConvertFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class SvgconvertFileToConvert extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file?: SvgconvertFileToConvertFile;
}


export class SvgconvertRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: SvgconvertFileToConvert;
}


export class SvgconvertFileUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=blob_name" })
  blobName?: string;

  @Metadata({ data: "json, name=blob_url" })
  blobUrl?: string;
}


export class SvgconvertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileUrl?: SvgconvertFileUrl;

  @Metadata()
  statusCode: number;
}
