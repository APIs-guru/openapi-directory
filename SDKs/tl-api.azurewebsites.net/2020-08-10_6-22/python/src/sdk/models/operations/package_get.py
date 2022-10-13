from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PackageGetQueryParams:
    package_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'packageId', 'style': 'form', 'explode': True }})
    

@dataclass
class PackageGetRequest:
    query_params: PackageGetQueryParams = field(default=None)
    

@dataclass
class PackageGetResponse:
    api_exception: Optional[shared.APIException] = field(default=None)
    content_type: str = field(default=None)
    default_response_dto_of_package_dto: Optional[shared.DefaultResponseDtoOfPackageDto] = field(default=None)
    status_code: int = field(default=None)
    
