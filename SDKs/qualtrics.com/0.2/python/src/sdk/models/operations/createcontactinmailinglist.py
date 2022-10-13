from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class CreateContactInMailinglistPathParams:
    directory_id: str = field(default=None, metadata={'path_param': { 'field_name': 'DirectoryId', 'style': 'simple', 'explode': False }})
    mailing_list_id: str = field(default=None, metadata={'path_param': { 'field_name': 'MailingListId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateContactInMailinglistRequest:
    path_params: CreateContactInMailinglistPathParams = field(default=None)
    request: shared.CreateContactInMailingList = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateContactInMailinglistResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
