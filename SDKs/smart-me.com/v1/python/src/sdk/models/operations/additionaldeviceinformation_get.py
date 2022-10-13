from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AdditionalDeviceInformationGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdditionalDeviceInformationGetRequest:
    path_params: AdditionalDeviceInformationGetPathParams = field(default=None)
    

@dataclass
class AdditionalDeviceInformationGetResponse:
    additional_device_information: Optional[shared.AdditionalDeviceInformation] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
