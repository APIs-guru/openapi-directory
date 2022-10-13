from dataclasses import dataclass, field



@dataclass
class DeleteUserEpisodesEpisodeIDPathParams:
    episode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserEpisodesEpisodeIDRequest:
    path_params: DeleteUserEpisodesEpisodeIDPathParams = field(default=None)
    

@dataclass
class DeleteUserEpisodesEpisodeIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
