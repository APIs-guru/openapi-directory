from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PackagePutRequest:
    request: shared.PackageDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PackagePutResponse:
    content_type: str = field()
    status_code: int = field()
    api_exception: Optional[shared.APIException] = field(default=None)
    default_response_dto_of_status_dto: Optional[shared.DefaultResponseDtoOfStatusDto] = field(default=None)
    
