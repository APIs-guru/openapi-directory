from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdatePriceHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    wm_consumer_channel_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE' }})
    wm_qos_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID' }})
    wm_sec_access_token: str = field(default=None, metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN' }})
    wm_svc_name: str = field(default=None, metadata={'header': { 'field_name': 'WM_SVC.NAME' }})
    
class UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum(str, Enum):
    USD = "USD"
    CAD = "CAD"


@dataclass_json
@dataclass
class UpdatePriceRequestBodyPricingComparisonPrice:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: Optional[UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    
class UpdatePriceRequestBodyPricingComparisonPriceTypeEnum(str, Enum):
    BASE = "BASE"

class UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum(str, Enum):
    USD = "USD"
    CAD = "CAD"


@dataclass_json
@dataclass
class UpdatePriceRequestBodyPricingCurrentPrice:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: Optional[UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    
class UpdatePriceRequestBodyPricingCurrentPriceTypeEnum(str, Enum):
    BASE = "BASE"
    REDUCED = "REDUCED"
    CLEARANCE = "CLEARANCE"

class UpdatePriceRequestBodyPricingPriceDisplayCodesEnum(str, Enum):
    CART = "CART"
    CHECKOUT = "CHECKOUT"

class UpdatePriceRequestBodyPricingProcessModeEnum(str, Enum):
    UPSERT = "UPSERT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class UpdatePriceRequestBodyPricing:
    comparison_price: Optional[UpdatePriceRequestBodyPricingComparisonPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonPrice' }})
    comparison_price_type: Optional[UpdatePriceRequestBodyPricingComparisonPriceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonPriceType' }})
    current_price: UpdatePriceRequestBodyPricingCurrentPrice = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPrice' }})
    current_price_type: UpdatePriceRequestBodyPricingCurrentPriceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPriceType' }})
    effective_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    price_display_codes: Optional[UpdatePriceRequestBodyPricingPriceDisplayCodesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceDisplayCodes' }})
    process_mode: Optional[UpdatePriceRequestBodyPricingProcessModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processMode' }})
    promo_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promoId' }})
    
class UpdatePriceRequestBodyReplaceAllEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"


@dataclass_json
@dataclass
class UpdatePriceRequestBody:
    definitions: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definitions' }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerId' }})
    pricing: List[UpdatePriceRequestBodyPricing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing' }})
    replace_all: Optional[UpdatePriceRequestBodyReplaceAllEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceAll' }})
    sku: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass
class UpdatePriceRequest:
    headers: UpdatePriceHeaders = field(default=None)
    request: UpdatePriceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdatePrice200ApplicationJSONErrorsCategoryEnum(str, Enum):
    APPLICATION = "APPLICATION"
    SYSTEM = "SYSTEM"
    REQUEST = "REQUEST"
    DATA = "DATA"


@dataclass_json
@dataclass
class UpdatePrice200ApplicationJSONErrorsCauses:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnum(str, Enum):
    INTERNAL_DATA_ERROR = "INTERNAL_DATA_ERROR"
    EXTERNAL_DATA_ERROR = "EXTERNAL_DATA_ERROR"
    SYSTEM_ERROR = "SYSTEM_ERROR"

class UpdatePrice200ApplicationJSONErrorsSeverityEnum(str, Enum):
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class UpdatePrice200ApplicationJSONErrors:
    category: Optional[UpdatePrice200ApplicationJSONErrorsCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    causes: Optional[List[UpdatePrice200ApplicationJSONErrorsCauses]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'causes' }})
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    component: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'component' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    error_identifiers: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorIdentifiers' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    gateway_error_category: Optional[UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayErrorCategory' }})
    info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    severity: Optional[UpdatePrice200ApplicationJSONErrorsSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdatePrice200ApplicationJSON:
    errors: Optional[List[UpdatePrice200ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    mart: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mart' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    

@dataclass
class UpdatePriceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_price_200_application_json_object: Optional[UpdatePrice200ApplicationJSON] = field(default=None)
    
