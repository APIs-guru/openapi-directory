import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum {
    Aes128 = "AES-128"
,    Aes256 = "AES-256"
}


export class AddRestrictionsV1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class AddRestrictionsV1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=allow_accessibility" })
  allowAccessibility?: boolean;

  @Metadata({ data: "multipart_form, name=allow_assemble_document" })
  allowAssembleDocument?: boolean;

  @Metadata({ data: "multipart_form, name=allow_change_content" })
  allowChangeContent?: boolean;

  @Metadata({ data: "multipart_form, name=allow_comment_and_fill_form" })
  allowCommentAndFillForm?: boolean;

  @Metadata({ data: "multipart_form, name=allow_copy_content" })
  allowCopyContent?: boolean;

  @Metadata({ data: "multipart_form, name=allow_fill_form" })
  allowFillForm?: boolean;

  @Metadata({ data: "multipart_form, name=allow_print" })
  allowPrint?: boolean;

  @Metadata({ data: "multipart_form, name=allow_print_high_resolution" })
  allowPrintHighResolution?: boolean;

  @Metadata({ data: "multipart_form, name=encryption_algorithm" })
  encryptionAlgorithm?: AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum;

  @Metadata({ data: "multipart_form, file=true" })
  file: AddRestrictionsV1RequestBodyFile;

  @Metadata({ data: "multipart_form, name=owner_password" })
  ownerPassword: string;

  @Metadata({ data: "multipart_form, name=user_password" })
  userPassword?: string;
}


export class AddRestrictionsV1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: AddRestrictionsV1RequestBody;
}


export class AddRestrictionsV14XxApplicationProblemPlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class AddRestrictionsV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  addRestrictionsV1200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  addRestrictionsV14XxApplicationProblemPlusJsonObject?: AddRestrictionsV14XxApplicationProblemPlusJson;
}
