from dataclasses import dataclass, field



@dataclass
class GetShopsIDStorefrontsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShopsIDStorefrontsRequest:
    path_params: GetShopsIDStorefrontsPathParams = field(default=None)
    

@dataclass
class GetShopsIDStorefrontsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
