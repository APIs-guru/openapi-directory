from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AdditionalDeviceInformationGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdditionalDeviceInformationGetRequest:
    path_params: AdditionalDeviceInformationGetPathParams = field()
    

@dataclass
class AdditionalDeviceInformationGetResponse:
    content_type: str = field()
    status_code: int = field()
    additional_device_information: Optional[shared.AdditionalDeviceInformation] = field(default=None)
    
