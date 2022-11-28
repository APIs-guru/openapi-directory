from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MeterFolderInformationGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MeterFolderInformationGetRequest:
    path_params: MeterFolderInformationGetPathParams = field()
    

@dataclass
class MeterFolderInformationGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    meter_folder_information: Optional[shared.MeterFolderInformation] = field(default=None)
    
