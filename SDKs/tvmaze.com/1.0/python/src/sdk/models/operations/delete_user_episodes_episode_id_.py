from dataclasses import dataclass, field



@dataclass
class DeleteUserEpisodesEpisodeIDPathParams:
    episode_id: int = field(metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserEpisodesEpisodeIDRequest:
    path_params: DeleteUserEpisodesEpisodeIDPathParams = field()
    

@dataclass
class DeleteUserEpisodesEpisodeIDResponse:
    content_type: str = field()
    status_code: int = field()
    
