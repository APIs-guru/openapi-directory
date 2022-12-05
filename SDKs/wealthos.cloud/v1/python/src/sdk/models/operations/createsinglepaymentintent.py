from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class CreateSinglePaymentIntentHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSinglePaymentIntentSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateSinglePaymentIntentRequest:
    headers: CreateSinglePaymentIntentHeaders = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateSinglePaymentIntentSecurity = field()
    

@dataclass
class CreateSinglePaymentIntentResponse:
    content_type: str = field()
    status_code: int = field()
    create_single_payment_intent_201_application_json_any: Optional[Any] = field(default=None)
    create_single_payment_intent_400_application_json_any: Optional[Any] = field(default=None)
    create_single_payment_intent_401_application_json_any: Optional[Any] = field(default=None)
    create_single_payment_intent_403_application_json_any: Optional[Any] = field(default=None)
    create_single_payment_intent_409_application_json_any: Optional[Any] = field(default=None)
    create_single_payment_intent_429_application_json_any: Optional[Any] = field(default=None)
    create_single_payment_intent_500_application_json_any: Optional[Any] = field(default=None)
    
