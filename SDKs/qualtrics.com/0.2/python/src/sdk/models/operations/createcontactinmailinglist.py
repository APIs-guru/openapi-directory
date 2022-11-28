from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateContactInMailinglistPathParams:
    directory_id: str = field(metadata={'path_param': { 'field_name': 'DirectoryId', 'style': 'simple', 'explode': False }})
    mailing_list_id: str = field(metadata={'path_param': { 'field_name': 'MailingListId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateContactInMailinglistRequest:
    path_params: CreateContactInMailinglistPathParams = field()
    request: shared.CreateContactInMailingList = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateContactInMailinglistResponse:
    content_type: str = field()
    status_code: int = field()
    
