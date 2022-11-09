import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemovePagesV1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class RemovePagesV1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: RemovePagesV1RequestBodyFile;

  @Metadata({ data: "multipart_form, name=first_page" })
  firstPage?: number;

  @Metadata({ data: "multipart_form, name=last_page" })
  lastPage?: number;
}


export class RemovePagesV1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: RemovePagesV1RequestBody;
}


export class RemovePagesV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RemovePagesV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  removePagesV1200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  removePagesV14XxApplicationProblemPlusJsonObject?: RemovePagesV14XxApplicationProblemPlusJson;
}
