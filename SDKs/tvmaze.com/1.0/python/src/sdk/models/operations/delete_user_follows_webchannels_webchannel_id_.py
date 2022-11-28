from dataclasses import dataclass, field



@dataclass
class DeleteUserFollowsWebchannelsWebchannelIDPathParams:
    webchannel_id: int = field(metadata={'path_param': { 'field_name': 'webchannel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserFollowsWebchannelsWebchannelIDRequest:
    path_params: DeleteUserFollowsWebchannelsWebchannelIDPathParams = field()
    

@dataclass
class DeleteUserFollowsWebchannelsWebchannelIDResponse:
    content_type: str = field()
    status_code: int = field()
    
