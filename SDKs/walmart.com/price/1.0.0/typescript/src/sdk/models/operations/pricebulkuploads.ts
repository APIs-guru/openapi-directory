import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PriceBulkUploadsFeedTypeEnum {
    Price = "price",
    CptSellerEligibility = "CPT_SELLER_ELIGIBILITY"
}


export class PriceBulkUploadsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feedType" })
  feedType: PriceBulkUploadsFeedTypeEnum;
}


export class PriceBulkUploadsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" })
  wmConsumerChannelType?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" })
  wmQosCorrelationId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" })
  wmSecAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" })
  wmSvcName: string;
}


export class PriceBulkUploadsRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PriceBulkUploadsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: PriceBulkUploadsRequestBodyFile;
}


export class PriceBulkUploads200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalAttributes" })
  additionalAttributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=feedId" })
  feedId?: string;
}


export class PriceBulkUploadsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PriceBulkUploadsQueryParams;

  @SpeakeasyMetadata()
  headers: PriceBulkUploadsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PriceBulkUploadsRequestBody;
}


export class PriceBulkUploadsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  priceBulkUploads200ApplicationJsonObject?: PriceBulkUploads200ApplicationJson;
}
