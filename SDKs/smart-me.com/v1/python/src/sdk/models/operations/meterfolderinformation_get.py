from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MeterFolderInformationGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MeterFolderInformationGetRequest:
    path_params: MeterFolderInformationGetPathParams = field(default=None)
    

@dataclass
class MeterFolderInformationGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    meter_folder_information: Optional[shared.MeterFolderInformation] = field(default=None)
    status_code: int = field(default=None)
    
