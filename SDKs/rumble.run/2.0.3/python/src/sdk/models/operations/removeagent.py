from dataclasses import dataclass, field



@dataclass
class RemoveAgentPathParams:
    agent_id: str = field(default=None, metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAgentSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveAgentRequest:
    path_params: RemoveAgentPathParams = field(default=None)
    security: RemoveAgentSecurity = field(default=None)
    

@dataclass
class RemoveAgentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
