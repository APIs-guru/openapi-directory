from dataclasses import dataclass, field



@dataclass
class ContactModeratorsPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContactModeratorsRequestBody:
    message: str = field(default=None, metadata={'multipart_form': { 'field_name': 'message' }})
    subject: str = field(default=None, metadata={'multipart_form': { 'field_name': 'subject' }})
    

@dataclass
class ContactModeratorsRequest:
    path_params: ContactModeratorsPathParams = field(default=None)
    request: ContactModeratorsRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ContactModeratorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
