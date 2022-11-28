from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPISpecificationQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPISpecificationHeaders:
    x_readme_version: str = field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPISpecificationSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPISpecificationRequest:
    headers: GetAPISpecificationHeaders = field()
    query_params: GetAPISpecificationQueryParams = field()
    security: GetAPISpecificationSecurity = field()
    

@dataclass
class GetAPISpecificationResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
