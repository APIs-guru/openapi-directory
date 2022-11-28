from dataclasses import dataclass, field



@dataclass
class GetShopsIDStorefrontsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShopsIDStorefrontsRequest:
    path_params: GetShopsIDStorefrontsPathParams = field()
    

@dataclass
class GetShopsIDStorefrontsResponse:
    content_type: str = field()
    status_code: int = field()
    
