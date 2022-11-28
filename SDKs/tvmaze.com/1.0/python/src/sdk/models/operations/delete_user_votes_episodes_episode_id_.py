from dataclasses import dataclass, field



@dataclass
class DeleteUserVotesEpisodesEpisodeIDPathParams:
    episode_id: int = field(metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserVotesEpisodesEpisodeIDRequest:
    path_params: DeleteUserVotesEpisodesEpisodeIDPathParams = field()
    

@dataclass
class DeleteUserVotesEpisodesEpisodeIDResponse:
    content_type: str = field()
    status_code: int = field()
    
