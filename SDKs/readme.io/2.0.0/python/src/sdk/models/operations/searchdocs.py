from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SearchDocsQueryParams:
    search: str = field(metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchDocsHeaders:
    x_readme_version: str = field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchDocsSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class SearchDocsRequest:
    headers: SearchDocsHeaders = field()
    query_params: SearchDocsQueryParams = field()
    security: SearchDocsSecurity = field()
    

@dataclass
class SearchDocsResponse:
    content_type: str = field()
    status_code: int = field()
    
