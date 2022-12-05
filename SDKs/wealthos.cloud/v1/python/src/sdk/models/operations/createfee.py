from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class CreateFeeHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFeeSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateFeeRequest:
    headers: CreateFeeHeaders = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFeeSecurity = field()
    

@dataclass
class CreateFeeResponse:
    content_type: str = field()
    status_code: int = field()
    root_type_for_fee_creation_response: Optional[Any] = field(default=None)
    create_fee_400_application_json_any: Optional[Any] = field(default=None)
    create_fee_401_application_json_any: Optional[Any] = field(default=None)
    create_fee_403_application_json_any: Optional[Any] = field(default=None)
    create_fee_404_application_json_any: Optional[Any] = field(default=None)
    create_fee_409_application_json_any: Optional[Any] = field(default=None)
    create_fee_429_application_json_any: Optional[Any] = field(default=None)
    create_fee_500_application_json_any: Optional[Any] = field(default=None)
    
