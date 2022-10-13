from dataclasses import dataclass, field



@dataclass
class DeleteUserVotesEpisodesEpisodeIDPathParams:
    episode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserVotesEpisodesEpisodeIDRequest:
    path_params: DeleteUserVotesEpisodesEpisodeIDPathParams = field(default=None)
    

@dataclass
class DeleteUserVotesEpisodesEpisodeIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
