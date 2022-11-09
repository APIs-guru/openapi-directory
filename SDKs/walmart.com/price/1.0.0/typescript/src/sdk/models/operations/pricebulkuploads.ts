import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PriceBulkUploadsFeedTypeEnum {
    Price = "price"
,    CptSellerEligibility = "CPT_SELLER_ELIGIBILITY"
}


export class PriceBulkUploadsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=feedType" })
  feedType: PriceBulkUploadsFeedTypeEnum;
}


export class PriceBulkUploadsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" })
  wmConsumerChannelType?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" })
  wmQosCorrelationId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" })
  wmSecAccessToken: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" })
  wmSvcName: string;
}


export class PriceBulkUploadsRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PriceBulkUploadsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file?: PriceBulkUploadsRequestBodyFile;
}


export class PriceBulkUploadsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PriceBulkUploadsQueryParams;

  @Metadata()
  headers: PriceBulkUploadsHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PriceBulkUploadsRequestBody;
}


export class PriceBulkUploads200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalAttributes" })
  additionalAttributes?: Map<string, any>;

  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;

  @Metadata({ data: "json, name=feedId" })
  feedId?: string;
}


export class PriceBulkUploadsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  priceBulkUploads200ApplicationJsonObject?: PriceBulkUploads200ApplicationJson;
}
