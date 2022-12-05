from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class CreateWithdrawalHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateWithdrawalSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateWithdrawalRequest:
    headers: CreateWithdrawalHeaders = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateWithdrawalSecurity = field()
    

@dataclass
class CreateWithdrawalResponse:
    content_type: str = field()
    status_code: int = field()
    root_type_for_withdrawal_creation_response: Optional[Any] = field(default=None)
    create_withdrawal_400_application_json_any: Optional[Any] = field(default=None)
    create_withdrawal_401_application_json_any: Optional[Any] = field(default=None)
    create_withdrawal_403_application_json_any: Optional[Any] = field(default=None)
    create_withdrawal_404_application_json_any: Optional[Any] = field(default=None)
    create_withdrawal_409_application_json_any: Optional[Any] = field(default=None)
    create_withdrawal_429_application_json_any: Optional[Any] = field(default=None)
    create_withdrawal_500_application_json_any: Optional[Any] = field(default=None)
    
