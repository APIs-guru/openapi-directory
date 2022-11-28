from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUserVotesEpisodesResponse:
    content_type: str = field()
    status_code: int = field()
    episode_votes: Optional[List[shared.EpisodeVote]] = field(default=None)
    
