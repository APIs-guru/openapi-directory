from dataclasses import dataclass, field



@dataclass
class RemoveSitePathParams:
    site_id: str = field(default=None, metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveSiteSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveSiteRequest:
    path_params: RemoveSitePathParams = field(default=None)
    security: RemoveSiteSecurity = field(default=None)
    

@dataclass
class RemoveSiteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
