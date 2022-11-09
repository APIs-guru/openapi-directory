import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateBulkInventoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=feedType" })
  feedType: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=shipNode" })
  shipNode?: string;
}


export class UpdateBulkInventoryHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" })
  wmConsumerChannelType: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" })
  wmQosCorrelationId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" })
  wmSecAccessToken: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" })
  wmSvcName: string;
}


export class UpdateBulkInventoryRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UpdateBulkInventoryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file?: UpdateBulkInventoryRequestBodyFile;
}


export class UpdateBulkInventoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UpdateBulkInventoryQueryParams;

  @Metadata()
  headers: UpdateBulkInventoryHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: UpdateBulkInventoryRequestBody;
}


export class UpdateBulkInventory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalAttributes" })
  additionalAttributes?: Map<string, any>;

  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=feedId" })
  feedId?: string;
}


export class UpdateBulkInventoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateBulkInventory200ApplicationJsonObject?: UpdateBulkInventory200ApplicationJson;
}
