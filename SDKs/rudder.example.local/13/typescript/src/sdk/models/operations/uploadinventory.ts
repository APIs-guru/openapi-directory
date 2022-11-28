import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadInventoryRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UploadInventoryRequestBodySignature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=signature" })
  signature: string;
}


export class UploadInventoryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: UploadInventoryRequestBodyFile;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  signature?: UploadInventoryRequestBodySignature;
}

export enum UploadInventory200ApplicationJsonActionEnum {
    UploadInventory = "uploadInventory"
}

export enum UploadInventory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UploadInventory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UploadInventory200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UploadInventory200ApplicationJsonResultEnum;
}


export class UploadInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadInventoryRequestBody;
}


export class UploadInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadInventory200ApplicationJsonObject?: UploadInventory200ApplicationJson;
}
