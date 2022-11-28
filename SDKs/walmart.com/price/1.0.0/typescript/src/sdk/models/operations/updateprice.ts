import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePriceHeaders extends SpeakeasyBase {
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

export enum UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD"
}


// UpdatePriceRequestBodyPricingComparisonPrice
/** 
 * This is applicable only for promotions
**/
export class UpdatePriceRequestBodyPricingComparisonPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum;
}

export enum UpdatePriceRequestBodyPricingComparisonPriceTypeEnum {
    Base = "BASE"
}

export enum UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD"
}


export class UpdatePriceRequestBodyPricingCurrentPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum;
}

export enum UpdatePriceRequestBodyPricingCurrentPriceTypeEnum {
    Base = "BASE",
    Reduced = "REDUCED",
    Clearance = "CLEARANCE"
}

export enum UpdatePriceRequestBodyPricingPriceDisplayCodesEnum {
    Cart = "CART",
    Checkout = "CHECKOUT"
}

export enum UpdatePriceRequestBodyPricingProcessModeEnum {
    Upsert = "UPSERT",
    Delete = "DELETE"
}


export class UpdatePriceRequestBodyPricing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparisonPrice" })
  comparisonPrice?: UpdatePriceRequestBodyPricingComparisonPrice;

  @SpeakeasyMetadata({ data: "json, name=comparisonPriceType" })
  comparisonPriceType?: UpdatePriceRequestBodyPricingComparisonPriceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=currentPrice" })
  currentPrice: UpdatePriceRequestBodyPricingCurrentPrice;

  @SpeakeasyMetadata({ data: "json, name=currentPriceType" })
  currentPriceType: UpdatePriceRequestBodyPricingCurrentPriceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=priceDisplayCodes" })
  priceDisplayCodes?: UpdatePriceRequestBodyPricingPriceDisplayCodesEnum;

  @SpeakeasyMetadata({ data: "json, name=processMode" })
  processMode?: UpdatePriceRequestBodyPricingProcessModeEnum;

  @SpeakeasyMetadata({ data: "json, name=promoId" })
  promoId?: string;
}

export enum UpdatePriceRequestBodyReplaceAllEnum {
    True = "true",
    False = "false"
}


export class UpdatePriceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definitions" })
  definitions?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: string;

  @SpeakeasyMetadata({ data: "json, name=pricing", elemType: UpdatePriceRequestBodyPricing })
  pricing: UpdatePriceRequestBodyPricing[];

  @SpeakeasyMetadata({ data: "json, name=replaceAll" })
  replaceAll?: UpdatePriceRequestBodyReplaceAllEnum;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku: string;
}

export enum UpdatePrice200ApplicationJsonErrorsCategoryEnum {
    Application = "APPLICATION",
    System = "SYSTEM",
    Request = "REQUEST",
    Data = "DATA"
}


export class UpdatePrice200ApplicationJsonErrorsCauses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum {
    InternalDataError = "INTERNAL_DATA_ERROR",
    ExternalDataError = "EXTERNAL_DATA_ERROR",
    SystemError = "SYSTEM_ERROR"
}

export enum UpdatePrice200ApplicationJsonErrorsSeverityEnum {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}


export class UpdatePrice200ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: UpdatePrice200ApplicationJsonErrorsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=causes", elemType: UpdatePrice200ApplicationJsonErrorsCauses })
  causes?: UpdatePrice200ApplicationJsonErrorsCauses[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=component" })
  component?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=errorIdentifiers" })
  errorIdentifiers?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayErrorCategory" })
  gatewayErrorCategory?: UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: UpdatePrice200ApplicationJsonErrorsSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePrice200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: UpdatePrice200ApplicationJsonErrors })
  errors?: UpdatePrice200ApplicationJsonErrors[];

  @SpeakeasyMetadata({ data: "json, name=mart" })
  mart?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}


export class UpdatePriceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdatePriceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdatePriceRequestBody;
}


export class UpdatePriceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePrice200ApplicationJsonObject?: UpdatePrice200ApplicationJson;
}
