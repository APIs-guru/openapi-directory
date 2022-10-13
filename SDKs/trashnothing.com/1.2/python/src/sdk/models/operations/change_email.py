from dataclasses import dataclass, field



@dataclass
class ChangeEmailRequestBody:
    address: str = field(default=None, metadata={'multipart_form': { 'field_name': 'address' }})
    

@dataclass
class ChangeEmailRequest:
    request: ChangeEmailRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ChangeEmailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
