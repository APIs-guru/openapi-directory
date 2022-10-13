from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveMerchantPathParams:
    merchant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'merchant_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveMerchantSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveMerchantRequest:
    path_params: RetrieveMerchantPathParams = field(default=None)
    security: RetrieveMerchantSecurity = field(default=None)
    

@dataclass
class RetrieveMerchantResponse:
    content_type: str = field(default=None)
    retrieve_merchant_response: Optional[shared.RetrieveMerchantResponse] = field(default=None)
    status_code: int = field(default=None)
    
