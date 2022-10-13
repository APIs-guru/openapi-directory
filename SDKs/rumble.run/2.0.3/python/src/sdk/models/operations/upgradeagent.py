from dataclasses import dataclass, field



@dataclass
class UpgradeAgentPathParams:
    agent_id: str = field(default=None, metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpgradeAgentSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpgradeAgentRequest:
    path_params: UpgradeAgentPathParams = field(default=None)
    security: UpgradeAgentSecurity = field(default=None)
    

@dataclass
class UpgradeAgentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
