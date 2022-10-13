from dataclasses import dataclass, field



@dataclass
class DeleteUserFollowsWebchannelsWebchannelIDPathParams:
    webchannel_id: int = field(default=None, metadata={'path_param': { 'field_name': 'webchannel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserFollowsWebchannelsWebchannelIDRequest:
    path_params: DeleteUserFollowsWebchannelsWebchannelIDPathParams = field(default=None)
    

@dataclass
class DeleteUserFollowsWebchannelsWebchannelIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
