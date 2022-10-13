from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PackageUpdateStatusQueryParams:
    package_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'packageId', 'style': 'form', 'explode': True }})
    status: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    user_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userName', 'style': 'form', 'explode': True }})
    

@dataclass
class PackageUpdateStatusRequest:
    query_params: PackageUpdateStatusQueryParams = field(default=None)
    

@dataclass
class PackageUpdateStatusResponse:
    api_exception: Optional[shared.APIException] = field(default=None)
    content_type: str = field(default=None)
    default_response_dto_of_boolean: Optional[shared.DefaultResponseDtoOfBoolean] = field(default=None)
    default_response_dto_of_string: Optional[shared.DefaultResponseDtoOfString] = field(default=None)
    status_code: int = field(default=None)
    
