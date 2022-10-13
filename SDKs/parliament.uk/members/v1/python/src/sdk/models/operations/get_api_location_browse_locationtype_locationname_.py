from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILocationBrowseLocationTypeLocationNamePathParams:
    location_name: str = field(default=None, metadata={'path_param': { 'field_name': 'locationName', 'style': 'simple', 'explode': False }})
    location_type: int = field(default=None, metadata={'path_param': { 'field_name': 'locationType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPILocationBrowseLocationTypeLocationNameRequest:
    path_params: GetAPILocationBrowseLocationTypeLocationNamePathParams = field(default=None)
    

@dataclass
class GetAPILocationBrowseLocationTypeLocationNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    location_item: Optional[shared.LocationItem] = field(default=None)
    status_code: int = field(default=None)
    
