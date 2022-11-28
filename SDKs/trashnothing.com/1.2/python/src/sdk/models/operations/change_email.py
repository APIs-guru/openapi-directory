from dataclasses import dataclass, field



@dataclass
class ChangeEmailRequestBody:
    address: str = field(metadata={'multipart_form': { 'field_name': 'address' }})
    

@dataclass
class ChangeEmailRequest:
    request: ChangeEmailRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ChangeEmailResponse:
    content_type: str = field()
    status_code: int = field()
    
