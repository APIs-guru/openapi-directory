from dataclasses import dataclass, field



@dataclass
class GetListingsSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsSlugRequest:
    path_params: GetListingsSlugPathParams = field()
    

@dataclass
class GetListingsSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
