from dataclasses import dataclass, field



@dataclass
class ContactModeratorsPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContactModeratorsRequestBody:
    message: str = field(metadata={'multipart_form': { 'field_name': 'message' }})
    subject: str = field(metadata={'multipart_form': { 'field_name': 'subject' }})
    

@dataclass
class ContactModeratorsRequest:
    path_params: ContactModeratorsPathParams = field()
    request: ContactModeratorsRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ContactModeratorsResponse:
    content_type: str = field()
    status_code: int = field()
    
