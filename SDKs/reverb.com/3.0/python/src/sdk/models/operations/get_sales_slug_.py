from dataclasses import dataclass, field



@dataclass
class GetSalesSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSalesSlugRequest:
    path_params: GetSalesSlugPathParams = field(default=None)
    

@dataclass
class GetSalesSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
