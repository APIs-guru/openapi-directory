import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum {
    Aes128 = "AES-128",
    Aes256 = "AES-256"
}


export class AddRestrictionsV1RequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class AddRestrictionsV1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=allow_accessibility" })
  allowAccessibility?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=allow_assemble_document" })
  allowAssembleDocument?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=allow_change_content" })
  allowChangeContent?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=allow_comment_and_fill_form" })
  allowCommentAndFillForm?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=allow_copy_content" })
  allowCopyContent?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=allow_fill_form" })
  allowFillForm?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=allow_print" })
  allowPrint?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=allow_print_high_resolution" })
  allowPrintHighResolution?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=encryption_algorithm" })
  encryptionAlgorithm?: AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: AddRestrictionsV1RequestBodyFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=owner_password" })
  ownerPassword: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_password" })
  userPassword?: string;
}


export class AddRestrictionsV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AddRestrictionsV1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: AddRestrictionsV1RequestBody;
}


export class AddRestrictionsV1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addRestrictionsV1200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  addRestrictionsV14XxApplicationProblemPlusJsonObject?: AddRestrictionsV14XxApplicationProblemPlusJson;
}
