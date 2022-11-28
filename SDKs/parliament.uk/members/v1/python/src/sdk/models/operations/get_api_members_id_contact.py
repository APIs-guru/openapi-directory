from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDContactPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDContactRequest:
    path_params: GetAPIMembersIDContactPathParams = field()
    

@dataclass
class GetAPIMembersIDContactResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    contact_information_list_item: Optional[shared.ContactInformationListItem] = field(default=None)
    
