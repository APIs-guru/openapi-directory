import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UploadInventoryRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UploadInventoryRequestBodySignature extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=signature" })
  signature: string;
}


export class UploadInventoryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file?: UploadInventoryRequestBodyFile;

  @Metadata({ data: "multipart_form, file=true" })
  signature?: UploadInventoryRequestBodySignature;
}


export class UploadInventoryRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadInventoryRequestBody;
}

export enum UploadInventory200ApplicationJsonActionEnum {
    UploadInventory = "uploadInventory"
}

export enum UploadInventory200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UploadInventory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UploadInventory200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: string;

  @Metadata({ data: "json, name=result" })
  result: UploadInventory200ApplicationJsonResultEnum;
}


export class UploadInventoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadInventory200ApplicationJsonObject?: UploadInventory200ApplicationJson;
}
