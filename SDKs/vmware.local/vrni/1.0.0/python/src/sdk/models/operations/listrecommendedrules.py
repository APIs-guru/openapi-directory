from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListRecommendedRulesSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListRecommendedRulesRequest:
    security: ListRecommendedRulesSecurity = field()
    request: Optional[shared.RecommendedRulesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListRecommendedRulesResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    recommended_rules: Optional[shared.RecommendedRules] = field(default=None)
    
