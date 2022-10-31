from dataclasses import dataclass, field



@dataclass
class SearchDocsQueryParams:
    search: str = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchDocsHeaders:
    x_readme_version: str = field(default=None, metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchDocsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class SearchDocsRequest:
    query_params: SearchDocsQueryParams = field(default=None)
    headers: SearchDocsHeaders = field(default=None)
    security: SearchDocsSecurity = field(default=None)
    

@dataclass
class SearchDocsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
