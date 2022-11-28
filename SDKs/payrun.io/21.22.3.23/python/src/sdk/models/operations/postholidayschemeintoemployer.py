from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostHolidaySchemeIntoEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostHolidaySchemeIntoEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostHolidaySchemeIntoEmployerRequest:
    headers: PostHolidaySchemeIntoEmployerHeaders = field()
    path_params: PostHolidaySchemeIntoEmployerPathParams = field()
    request: shared.HolidayScheme = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostHolidaySchemeIntoEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    
