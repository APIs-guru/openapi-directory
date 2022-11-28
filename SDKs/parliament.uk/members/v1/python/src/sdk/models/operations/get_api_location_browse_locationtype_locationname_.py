from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILocationBrowseLocationTypeLocationNamePathParams:
    location_name: str = field(metadata={'path_param': { 'field_name': 'locationName', 'style': 'simple', 'explode': False }})
    location_type: int = field(metadata={'path_param': { 'field_name': 'locationType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPILocationBrowseLocationTypeLocationNameRequest:
    path_params: GetAPILocationBrowseLocationTypeLocationNamePathParams = field()
    

@dataclass
class GetAPILocationBrowseLocationTypeLocationNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    location_item: Optional[shared.LocationItem] = field(default=None)
    
