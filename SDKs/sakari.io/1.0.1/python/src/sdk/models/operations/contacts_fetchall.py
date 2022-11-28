from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContactsFetchAllPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContactsFetchAllQueryParams:
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    first_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'firstName', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lastName', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mobile: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mobile', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclass
class ContactsFetchAllSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ContactsFetchAllRequest:
    path_params: ContactsFetchAllPathParams = field()
    query_params: ContactsFetchAllQueryParams = field()
    security: ContactsFetchAllSecurity = field()
    

@dataclass
class ContactsFetchAllResponse:
    content_type: str = field()
    status_code: int = field()
    contacts_response: Optional[shared.ContactsResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
