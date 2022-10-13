from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPhotosByIdsQueryParams:
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    photo_ids: str = field(default=None, metadata={'query_param': { 'field_name': 'photo_ids', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPhotosByIdsRequest:
    query_params: GetPhotosByIdsQueryParams = field(default=None)
    

@dataclass
class GetPhotosByIdsResponse:
    content_type: str = field(default=None)
    photo_results: Optional[List[shared.PhotoResult]] = field(default=None)
    status_code: int = field(default=None)
    
