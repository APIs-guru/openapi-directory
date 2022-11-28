import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePriceHeaders extends SpeakeasyBase {
    authorization: string;
    wmConsumerChannelType?: string;
    wmQosCorrelationId: string;
    wmSecAccessToken: string;
    wmSvcName: string;
}
export declare enum UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD"
}
/**
 * This is applicable only for promotions
**/
export declare class UpdatePriceRequestBodyPricingComparisonPrice extends SpeakeasyBase {
    amount?: number;
    currency?: UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum;
}
export declare enum UpdatePriceRequestBodyPricingComparisonPriceTypeEnum {
    Base = "BASE"
}
export declare enum UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD"
}
export declare class UpdatePriceRequestBodyPricingCurrentPrice extends SpeakeasyBase {
    amount?: number;
    currency?: UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum;
}
export declare enum UpdatePriceRequestBodyPricingCurrentPriceTypeEnum {
    Base = "BASE",
    Reduced = "REDUCED",
    Clearance = "CLEARANCE"
}
export declare enum UpdatePriceRequestBodyPricingPriceDisplayCodesEnum {
    Cart = "CART",
    Checkout = "CHECKOUT"
}
export declare enum UpdatePriceRequestBodyPricingProcessModeEnum {
    Upsert = "UPSERT",
    Delete = "DELETE"
}
export declare class UpdatePriceRequestBodyPricing extends SpeakeasyBase {
    comparisonPrice?: UpdatePriceRequestBodyPricingComparisonPrice;
    comparisonPriceType?: UpdatePriceRequestBodyPricingComparisonPriceTypeEnum;
    currentPrice: UpdatePriceRequestBodyPricingCurrentPrice;
    currentPriceType: UpdatePriceRequestBodyPricingCurrentPriceTypeEnum;
    effectiveDate?: Date;
    expirationDate?: Date;
    priceDisplayCodes?: UpdatePriceRequestBodyPricingPriceDisplayCodesEnum;
    processMode?: UpdatePriceRequestBodyPricingProcessModeEnum;
    promoId?: string;
}
export declare enum UpdatePriceRequestBodyReplaceAllEnum {
    True = "true",
    False = "false"
}
export declare class UpdatePriceRequestBody extends SpeakeasyBase {
    definitions?: Map<string, any>;
    offerId?: string;
    pricing: UpdatePriceRequestBodyPricing[];
    replaceAll?: UpdatePriceRequestBodyReplaceAllEnum;
    sku: string;
}
export declare enum UpdatePrice200ApplicationJsonErrorsCategoryEnum {
    Application = "APPLICATION",
    System = "SYSTEM",
    Request = "REQUEST",
    Data = "DATA"
}
export declare class UpdatePrice200ApplicationJsonErrorsCauses extends SpeakeasyBase {
    code?: string;
    description?: string;
    field?: string;
    type?: string;
}
export declare enum UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum {
    InternalDataError = "INTERNAL_DATA_ERROR",
    ExternalDataError = "EXTERNAL_DATA_ERROR",
    SystemError = "SYSTEM_ERROR"
}
export declare enum UpdatePrice200ApplicationJsonErrorsSeverityEnum {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}
export declare class UpdatePrice200ApplicationJsonErrors extends SpeakeasyBase {
    category?: UpdatePrice200ApplicationJsonErrorsCategoryEnum;
    causes?: UpdatePrice200ApplicationJsonErrorsCauses[];
    code: string;
    component?: string;
    description?: string;
    errorIdentifiers?: Map<string, Map<string, any>>;
    field?: string;
    gatewayErrorCategory?: UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum;
    info?: string;
    serviceName?: string;
    severity?: UpdatePrice200ApplicationJsonErrorsSeverityEnum;
    type?: string;
}
export declare class UpdatePrice200ApplicationJson extends SpeakeasyBase {
    errors?: UpdatePrice200ApplicationJsonErrors[];
    mart?: string;
    message?: string;
    sku?: string;
    statusCode?: number;
}
export declare class UpdatePriceRequest extends SpeakeasyBase {
    headers: UpdatePriceHeaders;
    request: UpdatePriceRequestBody;
}
export declare class UpdatePriceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updatePrice200ApplicationJsonObject?: UpdatePrice200ApplicationJson;
}
