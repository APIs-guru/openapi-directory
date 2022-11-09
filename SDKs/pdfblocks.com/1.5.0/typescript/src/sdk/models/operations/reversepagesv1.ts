import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReversePagesV1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class ReversePagesV1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: ReversePagesV1RequestBodyFile;
}


export class ReversePagesV1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ReversePagesV1RequestBody;
}


export class ReversePagesV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class ReversePagesV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reversePagesV1200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  reversePagesV14XxApplicationProblemPlusJsonObject?: ReversePagesV14XxApplicationProblemPlusJson;
}
