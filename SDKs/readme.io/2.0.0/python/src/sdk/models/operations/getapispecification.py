from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetAPISpecificationQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPISpecificationHeaders:
    x_readme_version: str = field(default=None, metadata={'header': { 'field_name': 'x-readme-version' }})
    

@dataclass
class GetAPISpecificationSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPISpecificationRequest:
    query_params: GetAPISpecificationQueryParams = field(default=None)
    headers: GetAPISpecificationHeaders = field(default=None)
    security: GetAPISpecificationSecurity = field(default=None)
    

@dataclass
class GetAPISpecificationResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
