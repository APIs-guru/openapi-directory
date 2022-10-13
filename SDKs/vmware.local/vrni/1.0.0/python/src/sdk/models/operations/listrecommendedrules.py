from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListRecommendedRulesSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListRecommendedRulesRequest:
    request: Optional[shared.RecommendedRulesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ListRecommendedRulesSecurity = field(default=None)
    

@dataclass
class ListRecommendedRulesResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    recommended_rules: Optional[shared.RecommendedRules] = field(default=None)
    status_code: int = field(default=None)
    
