import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePriceHeaders extends SpeakeasyBase {
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

export enum UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum {
    Usd = "USD"
,    Cad = "CAD"
}


// UpdatePriceRequestBodyPricingComparisonPrice
/** 
 * This is applicable only for promotions
**/
export class UpdatePriceRequestBodyPricingComparisonPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=currency" })
  currency?: UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum;
}

export enum UpdatePriceRequestBodyPricingComparisonPriceTypeEnum {
    Base = "BASE"
}

export enum UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum {
    Usd = "USD"
,    Cad = "CAD"
}


export class UpdatePriceRequestBodyPricingCurrentPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=currency" })
  currency?: UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum;
}

export enum UpdatePriceRequestBodyPricingCurrentPriceTypeEnum {
    Base = "BASE"
,    Reduced = "REDUCED"
,    Clearance = "CLEARANCE"
}

export enum UpdatePriceRequestBodyPricingPriceDisplayCodesEnum {
    Cart = "CART"
,    Checkout = "CHECKOUT"
}

export enum UpdatePriceRequestBodyPricingProcessModeEnum {
    Upsert = "UPSERT"
,    Delete = "DELETE"
}


export class UpdatePriceRequestBodyPricing extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparisonPrice" })
  comparisonPrice?: UpdatePriceRequestBodyPricingComparisonPrice;

  @Metadata({ data: "json, name=comparisonPriceType" })
  comparisonPriceType?: UpdatePriceRequestBodyPricingComparisonPriceTypeEnum;

  @Metadata({ data: "json, name=currentPrice" })
  currentPrice: UpdatePriceRequestBodyPricingCurrentPrice;

  @Metadata({ data: "json, name=currentPriceType" })
  currentPriceType: UpdatePriceRequestBodyPricingCurrentPriceTypeEnum;

  @Metadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=priceDisplayCodes" })
  priceDisplayCodes?: UpdatePriceRequestBodyPricingPriceDisplayCodesEnum;

  @Metadata({ data: "json, name=processMode" })
  processMode?: UpdatePriceRequestBodyPricingProcessModeEnum;

  @Metadata({ data: "json, name=promoId" })
  promoId?: string;
}

export enum UpdatePriceRequestBodyReplaceAllEnum {
    True = "true"
,    False = "false"
}


export class UpdatePriceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=definitions" })
  definitions?: Map<string, any>;

  @Metadata({ data: "json, name=offerId" })
  offerId?: string;

  @Metadata({ data: "json, name=pricing", elemType: operations.UpdatePriceRequestBodyPricing })
  pricing: UpdatePriceRequestBodyPricing[];

  @Metadata({ data: "json, name=replaceAll" })
  replaceAll?: UpdatePriceRequestBodyReplaceAllEnum;

  @Metadata({ data: "json, name=sku" })
  sku: string;
}


export class UpdatePriceRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdatePriceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdatePriceRequestBody;
}

export enum UpdatePrice200ApplicationJsonErrorsCategoryEnum {
    Application = "APPLICATION"
,    System = "SYSTEM"
,    Request = "REQUEST"
,    Data = "DATA"
}


export class UpdatePrice200ApplicationJsonErrorsCauses extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

export enum UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum {
    InternalDataError = "INTERNAL_DATA_ERROR"
,    ExternalDataError = "EXTERNAL_DATA_ERROR"
,    SystemError = "SYSTEM_ERROR"
}

export enum UpdatePrice200ApplicationJsonErrorsSeverityEnum {
    Info = "INFO"
,    Warn = "WARN"
,    Error = "ERROR"
}


export class UpdatePrice200ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: UpdatePrice200ApplicationJsonErrorsCategoryEnum;

  @Metadata({ data: "json, name=causes", elemType: operations.UpdatePrice200ApplicationJsonErrorsCauses })
  causes?: UpdatePrice200ApplicationJsonErrorsCauses[];

  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=component" })
  component?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=errorIdentifiers" })
  errorIdentifiers?: Map<string, Map<string, any>>;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=gatewayErrorCategory" })
  gatewayErrorCategory?: UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum;

  @Metadata({ data: "json, name=info" })
  info?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: UpdatePrice200ApplicationJsonErrorsSeverityEnum;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePrice200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: operations.UpdatePrice200ApplicationJsonErrors })
  errors?: UpdatePrice200ApplicationJsonErrors[];

  @Metadata({ data: "json, name=mart" })
  mart?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;
}


export class UpdatePriceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatePrice200ApplicationJsonObject?: UpdatePrice200ApplicationJson;
}
