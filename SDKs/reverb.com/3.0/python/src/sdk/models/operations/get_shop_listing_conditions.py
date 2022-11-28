from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetShopListingConditionsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShopListingConditionsRequest:
    security: GetShopListingConditionsSecurity = field()
    

@dataclass
class GetShopListingConditionsResponse:
    content_type: str = field()
    status_code: int = field()
    
