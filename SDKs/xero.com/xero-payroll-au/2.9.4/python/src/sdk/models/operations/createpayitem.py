from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreatePayItemHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class CreatePayItemSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePayItemRequest:
    headers: CreatePayItemHeaders = field(default=None)
    request: shared.PayItem = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePayItemSecurity = field(default=None)
    

@dataclass
class CreatePayItemResponse:
    content_type: str = field(default=None)
    pay_items: Optional[shared.PayItems] = field(default=None)
    status_code: int = field(default=None)
    
