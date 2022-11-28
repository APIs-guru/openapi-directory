import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AddPasswordV1RequestBodyEncryptionAlgorithmEnum {
    Aes128 = "AES-128",
    Aes256 = "AES-256"
}


export class AddPasswordV1RequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class AddPasswordV1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=encryption_algorithm" })
  encryptionAlgorithm?: AddPasswordV1RequestBodyEncryptionAlgorithmEnum;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: AddPasswordV1RequestBodyFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password: string;
}


export class AddPasswordV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AddPasswordV1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: AddPasswordV1RequestBody;
}


export class AddPasswordV1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addPasswordV1200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  addPasswordV14XxApplicationProblemPlusJsonObject?: AddPasswordV14XxApplicationProblemPlusJson;
}
