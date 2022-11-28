from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreatePayItemHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePayItemSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePayItemRequest:
    headers: CreatePayItemHeaders = field()
    request: shared.PayItemInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePayItemSecurity = field()
    

@dataclass
class CreatePayItemResponse:
    content_type: str = field()
    status_code: int = field()
    pay_items: Optional[shared.PayItems] = field(default=None)
    
