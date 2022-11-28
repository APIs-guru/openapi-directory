from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PackageDeleteQueryParams:
    package_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PackageId', 'style': 'form', 'explode': True }})
    

@dataclass
class PackageDeleteRequest:
    query_params: PackageDeleteQueryParams = field()
    

@dataclass
class PackageDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    api_exception: Optional[shared.APIException] = field(default=None)
    default_response_dto_of_boolean: Optional[shared.DefaultResponseDtoOfBoolean] = field(default=None)
    default_response_dto_of_string: Optional[shared.DefaultResponseDtoOfString] = field(default=None)
    
