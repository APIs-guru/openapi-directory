import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RotatePagesV1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class RotatePagesV1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=angle" })
  angle: number;

  @Metadata({ data: "multipart_form, file=true" })
  file: RotatePagesV1RequestBodyFile;

  @Metadata({ data: "multipart_form, name=first_page" })
  firstPage?: number;

  @Metadata({ data: "multipart_form, name=last_page" })
  lastPage?: number;
}


export class RotatePagesV1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: RotatePagesV1RequestBody;
}


export class RotatePagesV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RotatePagesV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  rotatePagesV1200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  rotatePagesV14XxApplicationProblemPlusJsonObject?: RotatePagesV14XxApplicationProblemPlusJson;
}
