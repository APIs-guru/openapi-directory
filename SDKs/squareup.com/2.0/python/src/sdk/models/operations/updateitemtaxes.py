from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateItemTaxesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateItemTaxesRequest:
    request: shared.UpdateItemTaxesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateItemTaxesSecurity = field(default=None)
    

@dataclass
class UpdateItemTaxesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_item_taxes_response: Optional[shared.UpdateItemTaxesResponse] = field(default=None)
    
