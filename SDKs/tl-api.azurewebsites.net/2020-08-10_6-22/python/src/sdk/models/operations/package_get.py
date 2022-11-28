from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PackageGetQueryParams:
    package_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'packageId', 'style': 'form', 'explode': True }})
    

@dataclass
class PackageGetRequest:
    query_params: PackageGetQueryParams = field()
    

@dataclass
class PackageGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_exception: Optional[shared.APIException] = field(default=None)
    default_response_dto_of_package_dto: Optional[shared.DefaultResponseDtoOfPackageDto] = field(default=None)
    
