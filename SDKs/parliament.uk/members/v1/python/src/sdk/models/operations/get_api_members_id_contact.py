from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDContactPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDContactRequest:
    path_params: GetAPIMembersIDContactPathParams = field(default=None)
    

@dataclass
class GetAPIMembersIDContactResponse:
    body: bytes = field(default=None)
    contact_information_list_item: Optional[shared.ContactInformationListItem] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
