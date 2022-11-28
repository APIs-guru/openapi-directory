# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetStatusRequest(
    security=operations.GetStatusSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    headers=operations.GetStatusHeaders(
        if_modified_since="officia",
    ),
)
    
res = s.tba.get_status(req)

if res.api_status is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### TBA

* `get_status` - Returns API status, and TBA status information.

### district

* `get_district_events` - Gets a list of events in the given district.
* `get_district_events_keys` - Gets a list of event keys for events in the given district.
* `get_district_events_simple` - Gets a short-form list of events in the given district.
* `get_district_rankings` - Gets a list of team district rankings for the given district.
* `get_district_teams` - Gets a list of `Team` objects that competed in events in the given district.
* `get_district_teams_keys` - Gets a list of `Team` objects that competed in events in the given district.
* `get_district_teams_simple` - Gets a short-form list of `Team` objects that competed in events in the given district.
* `get_districts_by_year` - Gets a list of districts and their corresponding district key, for the given year.
* `get_event_district_points` - Gets a list of team rankings for the Event.
* `get_team_districts` - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

### event

* `get_district_events` - Gets a list of events in the given district.
* `get_district_events_keys` - Gets a list of event keys for events in the given district.
* `get_district_events_simple` - Gets a short-form list of events in the given district.
* `get_event` - Gets an Event.
* `get_event_alliances` - Gets a list of Elimination Alliances for the given Event.
* `get_event_awards` - Gets a list of awards from the given event.
* `get_event_district_points` - Gets a list of team rankings for the Event.
* `get_event_insights` - Gets a set of Event-specific insights for the given Event.
* `get_event_match_timeseries` - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* `get_event_matches` - Gets a list of matches for the given event.
* `get_event_matches_keys` - Gets a list of match keys for the given event.
* `get_event_matches_simple` - Gets a short-form list of matches for the given event.
* `get_event_op_rs` - Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.
* `get_event_predictions` - Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.
* `get_event_rankings` - Gets a list of team rankings for the Event.
* `get_event_simple` - Gets a short-form Event.
* `get_event_teams` - Gets a list of `Team` objects that competed in the given event.
* `get_event_teams_keys` - Gets a list of `Team` keys that competed in the given event.
* `get_event_teams_simple` - Gets a short-form list of `Team` objects that competed in the given event.
* `get_event_teams_statuses` - Gets a key-value list of the event statuses for teams competing at the given event.
* `get_events_by_year` - Gets a list of events in the given year.
* `get_events_by_year_keys` - Gets a list of event keys in the given year.
* `get_events_by_year_simple` - Gets a short-form list of events in the given year.
* `get_team_event_awards` - Gets a list of awards the given team won at the given event.
* `get_team_event_matches` - Gets a list of matches for the given team and event.
* `get_team_event_matches_keys` - Gets a list of match keys for matches for the given team and event.
* `get_team_event_matches_simple` - Gets a short-form list of matches for the given team and event.
* `get_team_event_status` - Gets the competition rank and status of the team at the given event.
* `get_team_events` - Gets a list of all events this team has competed at.
* `get_team_events_by_year` - Gets a list of events this team has competed at in the given year.
* `get_team_events_by_year_keys` - Gets a list of the event keys for events this team has competed at in the given year.
* `get_team_events_by_year_simple` - Gets a short-form list of events this team has competed at in the given year.
* `get_team_events_keys` - Gets a list of the event keys for all events this team has competed at.
* `get_team_events_simple` - Gets a short-form list of all events this team has competed at.
* `get_team_events_statuses_by_year` - Gets a key-value list of the event statuses for events this team has competed at in the given year.

### list

* `get_district_events` - Gets a list of events in the given district.
* `get_district_events_keys` - Gets a list of event keys for events in the given district.
* `get_district_events_simple` - Gets a short-form list of events in the given district.
* `get_district_rankings` - Gets a list of team district rankings for the given district.
* `get_district_teams` - Gets a list of `Team` objects that competed in events in the given district.
* `get_district_teams_keys` - Gets a list of `Team` objects that competed in events in the given district.
* `get_district_teams_simple` - Gets a short-form list of `Team` objects that competed in events in the given district.
* `get_event_teams` - Gets a list of `Team` objects that competed in the given event.
* `get_event_teams_keys` - Gets a list of `Team` keys that competed in the given event.
* `get_event_teams_simple` - Gets a short-form list of `Team` objects that competed in the given event.
* `get_event_teams_statuses` - Gets a key-value list of the event statuses for teams competing at the given event.
* `get_events_by_year` - Gets a list of events in the given year.
* `get_events_by_year_keys` - Gets a list of event keys in the given year.
* `get_events_by_year_simple` - Gets a short-form list of events in the given year.
* `get_team_events_statuses_by_year` - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* `get_teams` - Gets a list of `Team` objects, paginated in groups of 500.
* `get_teams_by_year` - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* `get_teams_by_year_keys` - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* `get_teams_by_year_simple` - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* `get_teams_keys` - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* `get_teams_simple` - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

### match

* `get_event_match_timeseries` - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* `get_event_matches` - Gets a list of matches for the given event.
* `get_event_matches_keys` - Gets a list of match keys for the given event.
* `get_event_matches_simple` - Gets a short-form list of matches for the given event.
* `get_match` - Gets a `Match` object for the given match key.
* `get_match_simple` - Gets a short-form `Match` object for the given match key.
* `get_match_timeseries` - Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* `get_match_zebra` - Gets Zebra MotionWorks data for a Match for the given match key.
* `get_team_event_matches` - Gets a list of matches for the given team and event.
* `get_team_event_matches_keys` - Gets a list of match keys for matches for the given team and event.
* `get_team_event_matches_simple` - Gets a short-form list of matches for the given team and event.
* `get_team_matches_by_year` - Gets a list of matches for the given team and year.
* `get_team_matches_by_year_keys` - Gets a list of match keys for matches for the given team and year.
* `get_team_matches_by_year_simple` - Gets a short-form list of matches for the given team and year.

### team

* `get_district_rankings` - Gets a list of team district rankings for the given district.
* `get_district_teams` - Gets a list of `Team` objects that competed in events in the given district.
* `get_district_teams_keys` - Gets a list of `Team` objects that competed in events in the given district.
* `get_district_teams_simple` - Gets a short-form list of `Team` objects that competed in events in the given district.
* `get_event_teams` - Gets a list of `Team` objects that competed in the given event.
* `get_event_teams_keys` - Gets a list of `Team` keys that competed in the given event.
* `get_event_teams_simple` - Gets a short-form list of `Team` objects that competed in the given event.
* `get_event_teams_statuses` - Gets a key-value list of the event statuses for teams competing at the given event.
* `get_team` - Gets a `Team` object for the team referenced by the given key.
* `get_team_awards` - Gets a list of awards the given team has won.
* `get_team_awards_by_year` - Gets a list of awards the given team has won in a given year.
* `get_team_districts` - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
* `get_team_event_awards` - Gets a list of awards the given team won at the given event.
* `get_team_event_matches` - Gets a list of matches for the given team and event.
* `get_team_event_matches_keys` - Gets a list of match keys for matches for the given team and event.
* `get_team_event_matches_simple` - Gets a short-form list of matches for the given team and event.
* `get_team_event_status` - Gets the competition rank and status of the team at the given event.
* `get_team_events` - Gets a list of all events this team has competed at.
* `get_team_events_by_year` - Gets a list of events this team has competed at in the given year.
* `get_team_events_by_year_keys` - Gets a list of the event keys for events this team has competed at in the given year.
* `get_team_events_by_year_simple` - Gets a short-form list of events this team has competed at in the given year.
* `get_team_events_keys` - Gets a list of the event keys for all events this team has competed at.
* `get_team_events_simple` - Gets a short-form list of all events this team has competed at.
* `get_team_events_statuses_by_year` - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* `get_team_matches_by_year` - Gets a list of matches for the given team and year.
* `get_team_matches_by_year_keys` - Gets a list of match keys for matches for the given team and year.
* `get_team_matches_by_year_simple` - Gets a short-form list of matches for the given team and year.
* `get_team_media_by_tag` - Gets a list of Media (videos / pictures) for the given team and tag.
* `get_team_media_by_tag_year` - Gets a list of Media (videos / pictures) for the given team, tag and year.
* `get_team_media_by_year` - Gets a list of Media (videos / pictures) for the given team and year.
* `get_team_robots` - Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
* `get_team_simple` - Gets a `Team_Simple` object for the team referenced by the given key.
* `get_team_social_media` - Gets a list of Media (social media) for the given team.
* `get_team_years_participated` - Gets a list of years in which the team participated in at least one competition.
* `get_teams` - Gets a list of `Team` objects, paginated in groups of 500.
* `get_teams_by_year` - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* `get_teams_by_year_keys` - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* `get_teams_by_year_simple` - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* `get_teams_keys` - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* `get_teams_simple` - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
