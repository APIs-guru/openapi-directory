from dataclasses import dataclass, field



@dataclass
class SharePostPathParams:
    post_id: str = field(metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SharePostRequest:
    path_params: SharePostPathParams = field()
    

@dataclass
class SharePostResponse:
    content_type: str = field()
    status_code: int = field()
    
