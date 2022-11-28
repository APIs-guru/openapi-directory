from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFirewallRulePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFirewallRuleQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFirewallRuleSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFirewallRuleRequest:
    path_params: GetFirewallRulePathParams = field()
    query_params: GetFirewallRuleQueryParams = field()
    security: GetFirewallRuleSecurity = field()
    

@dataclass
class GetFirewallRuleResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    base_firewall_rule: Optional[shared.BaseFirewallRule] = field(default=None)
    
