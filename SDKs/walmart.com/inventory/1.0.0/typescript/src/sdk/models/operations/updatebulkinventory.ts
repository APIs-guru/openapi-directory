import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateBulkInventoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feedType" })
  feedType: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shipNode" })
  shipNode?: string;
}


export class UpdateBulkInventoryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" })
  wmConsumerChannelType: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" })
  wmQosCorrelationId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" })
  wmSecAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" })
  wmSvcName: string;
}


export class UpdateBulkInventoryRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UpdateBulkInventoryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: UpdateBulkInventoryRequestBodyFile;
}


export class UpdateBulkInventory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalAttributes" })
  additionalAttributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=feedId" })
  feedId?: string;
}


export class UpdateBulkInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UpdateBulkInventoryQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateBulkInventoryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: UpdateBulkInventoryRequestBody;
}


export class UpdateBulkInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateBulkInventory200ApplicationJsonObject?: UpdateBulkInventory200ApplicationJson;
}
