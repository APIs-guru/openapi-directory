import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AddPasswordV1RequestBodyEncryptionAlgorithmEnum {
    Aes128 = "AES-128"
,    Aes256 = "AES-256"
}


export class AddPasswordV1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class AddPasswordV1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=encryption_algorithm" })
  encryptionAlgorithm?: AddPasswordV1RequestBodyEncryptionAlgorithmEnum;

  @Metadata({ data: "multipart_form, file=true" })
  file: AddPasswordV1RequestBodyFile;

  @Metadata({ data: "multipart_form, name=password" })
  password: string;
}


export class AddPasswordV1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: AddPasswordV1RequestBody;
}


export class AddPasswordV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class AddPasswordV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  addPasswordV1200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  addPasswordV14XxApplicationProblemPlusJsonObject?: AddPasswordV14XxApplicationProblemPlusJson;
}
