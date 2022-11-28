# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetStatusRequest{
        Security: operations.GetStatusSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Headers: operations.GetStatusHeaders{
            IfModifiedSince: "officia",
        },
    }
    
    res, err := s.Tba.GetStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIStatus != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### TBA

* `GetStatus` - Returns API status, and TBA status information.

### district

* `GetDistrictEvents` - Gets a list of events in the given district.
* `GetDistrictEventsKeys` - Gets a list of event keys for events in the given district.
* `GetDistrictEventsSimple` - Gets a short-form list of events in the given district.
* `GetDistrictRankings` - Gets a list of team district rankings for the given district.
* `GetDistrictTeams` - Gets a list of `Team` objects that competed in events in the given district.
* `GetDistrictTeamsKeys` - Gets a list of `Team` objects that competed in events in the given district.
* `GetDistrictTeamsSimple` - Gets a short-form list of `Team` objects that competed in events in the given district.
* `GetDistrictsByYear` - Gets a list of districts and their corresponding district key, for the given year.
* `GetEventDistrictPoints` - Gets a list of team rankings for the Event.
* `GetTeamDistricts` - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

### event

* `GetDistrictEvents` - Gets a list of events in the given district.
* `GetDistrictEventsKeys` - Gets a list of event keys for events in the given district.
* `GetDistrictEventsSimple` - Gets a short-form list of events in the given district.
* `GetEvent` - Gets an Event.
* `GetEventAlliances` - Gets a list of Elimination Alliances for the given Event.
* `GetEventAwards` - Gets a list of awards from the given event.
* `GetEventDistrictPoints` - Gets a list of team rankings for the Event.
* `GetEventInsights` - Gets a set of Event-specific insights for the given Event.
* `GetEventMatchTimeseries` - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* `GetEventMatches` - Gets a list of matches for the given event.
* `GetEventMatchesKeys` - Gets a list of match keys for the given event.
* `GetEventMatchesSimple` - Gets a short-form list of matches for the given event.
* `GetEventOpRs` - Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.
* `GetEventPredictions` - Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.
* `GetEventRankings` - Gets a list of team rankings for the Event.
* `GetEventSimple` - Gets a short-form Event.
* `GetEventTeams` - Gets a list of `Team` objects that competed in the given event.
* `GetEventTeamsKeys` - Gets a list of `Team` keys that competed in the given event.
* `GetEventTeamsSimple` - Gets a short-form list of `Team` objects that competed in the given event.
* `GetEventTeamsStatuses` - Gets a key-value list of the event statuses for teams competing at the given event.
* `GetEventsByYear` - Gets a list of events in the given year.
* `GetEventsByYearKeys` - Gets a list of event keys in the given year.
* `GetEventsByYearSimple` - Gets a short-form list of events in the given year.
* `GetTeamEventAwards` - Gets a list of awards the given team won at the given event.
* `GetTeamEventMatches` - Gets a list of matches for the given team and event.
* `GetTeamEventMatchesKeys` - Gets a list of match keys for matches for the given team and event.
* `GetTeamEventMatchesSimple` - Gets a short-form list of matches for the given team and event.
* `GetTeamEventStatus` - Gets the competition rank and status of the team at the given event.
* `GetTeamEvents` - Gets a list of all events this team has competed at.
* `GetTeamEventsByYear` - Gets a list of events this team has competed at in the given year.
* `GetTeamEventsByYearKeys` - Gets a list of the event keys for events this team has competed at in the given year.
* `GetTeamEventsByYearSimple` - Gets a short-form list of events this team has competed at in the given year.
* `GetTeamEventsKeys` - Gets a list of the event keys for all events this team has competed at.
* `GetTeamEventsSimple` - Gets a short-form list of all events this team has competed at.
* `GetTeamEventsStatusesByYear` - Gets a key-value list of the event statuses for events this team has competed at in the given year.

### list

* `GetDistrictEvents` - Gets a list of events in the given district.
* `GetDistrictEventsKeys` - Gets a list of event keys for events in the given district.
* `GetDistrictEventsSimple` - Gets a short-form list of events in the given district.
* `GetDistrictRankings` - Gets a list of team district rankings for the given district.
* `GetDistrictTeams` - Gets a list of `Team` objects that competed in events in the given district.
* `GetDistrictTeamsKeys` - Gets a list of `Team` objects that competed in events in the given district.
* `GetDistrictTeamsSimple` - Gets a short-form list of `Team` objects that competed in events in the given district.
* `GetEventTeams` - Gets a list of `Team` objects that competed in the given event.
* `GetEventTeamsKeys` - Gets a list of `Team` keys that competed in the given event.
* `GetEventTeamsSimple` - Gets a short-form list of `Team` objects that competed in the given event.
* `GetEventTeamsStatuses` - Gets a key-value list of the event statuses for teams competing at the given event.
* `GetEventsByYear` - Gets a list of events in the given year.
* `GetEventsByYearKeys` - Gets a list of event keys in the given year.
* `GetEventsByYearSimple` - Gets a short-form list of events in the given year.
* `GetTeamEventsStatusesByYear` - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* `GetTeams` - Gets a list of `Team` objects, paginated in groups of 500.
* `GetTeamsByYear` - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* `GetTeamsByYearKeys` - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* `GetTeamsByYearSimple` - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* `GetTeamsKeys` - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* `GetTeamsSimple` - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

### match

* `GetEventMatchTimeseries` - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* `GetEventMatches` - Gets a list of matches for the given event.
* `GetEventMatchesKeys` - Gets a list of match keys for the given event.
* `GetEventMatchesSimple` - Gets a short-form list of matches for the given event.
* `GetMatch` - Gets a `Match` object for the given match key.
* `GetMatchSimple` - Gets a short-form `Match` object for the given match key.
* `GetMatchTimeseries` - Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* `GetMatchZebra` - Gets Zebra MotionWorks data for a Match for the given match key.
* `GetTeamEventMatches` - Gets a list of matches for the given team and event.
* `GetTeamEventMatchesKeys` - Gets a list of match keys for matches for the given team and event.
* `GetTeamEventMatchesSimple` - Gets a short-form list of matches for the given team and event.
* `GetTeamMatchesByYear` - Gets a list of matches for the given team and year.
* `GetTeamMatchesByYearKeys` - Gets a list of match keys for matches for the given team and year.
* `GetTeamMatchesByYearSimple` - Gets a short-form list of matches for the given team and year.

### team

* `GetDistrictRankings` - Gets a list of team district rankings for the given district.
* `GetDistrictTeams` - Gets a list of `Team` objects that competed in events in the given district.
* `GetDistrictTeamsKeys` - Gets a list of `Team` objects that competed in events in the given district.
* `GetDistrictTeamsSimple` - Gets a short-form list of `Team` objects that competed in events in the given district.
* `GetEventTeams` - Gets a list of `Team` objects that competed in the given event.
* `GetEventTeamsKeys` - Gets a list of `Team` keys that competed in the given event.
* `GetEventTeamsSimple` - Gets a short-form list of `Team` objects that competed in the given event.
* `GetEventTeamsStatuses` - Gets a key-value list of the event statuses for teams competing at the given event.
* `GetTeam` - Gets a `Team` object for the team referenced by the given key.
* `GetTeamAwards` - Gets a list of awards the given team has won.
* `GetTeamAwardsByYear` - Gets a list of awards the given team has won in a given year.
* `GetTeamDistricts` - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
* `GetTeamEventAwards` - Gets a list of awards the given team won at the given event.
* `GetTeamEventMatches` - Gets a list of matches for the given team and event.
* `GetTeamEventMatchesKeys` - Gets a list of match keys for matches for the given team and event.
* `GetTeamEventMatchesSimple` - Gets a short-form list of matches for the given team and event.
* `GetTeamEventStatus` - Gets the competition rank and status of the team at the given event.
* `GetTeamEvents` - Gets a list of all events this team has competed at.
* `GetTeamEventsByYear` - Gets a list of events this team has competed at in the given year.
* `GetTeamEventsByYearKeys` - Gets a list of the event keys for events this team has competed at in the given year.
* `GetTeamEventsByYearSimple` - Gets a short-form list of events this team has competed at in the given year.
* `GetTeamEventsKeys` - Gets a list of the event keys for all events this team has competed at.
* `GetTeamEventsSimple` - Gets a short-form list of all events this team has competed at.
* `GetTeamEventsStatusesByYear` - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* `GetTeamMatchesByYear` - Gets a list of matches for the given team and year.
* `GetTeamMatchesByYearKeys` - Gets a list of match keys for matches for the given team and year.
* `GetTeamMatchesByYearSimple` - Gets a short-form list of matches for the given team and year.
* `GetTeamMediaByTag` - Gets a list of Media (videos / pictures) for the given team and tag.
* `GetTeamMediaByTagYear` - Gets a list of Media (videos / pictures) for the given team, tag and year.
* `GetTeamMediaByYear` - Gets a list of Media (videos / pictures) for the given team and year.
* `GetTeamRobots` - Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
* `GetTeamSimple` - Gets a `Team_Simple` object for the team referenced by the given key.
* `GetTeamSocialMedia` - Gets a list of Media (social media) for the given team.
* `GetTeamYearsParticipated` - Gets a list of years in which the team participated in at least one competition.
* `GetTeams` - Gets a list of `Team` objects, paginated in groups of 500.
* `GetTeamsByYear` - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* `GetTeamsByYearKeys` - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* `GetTeamsByYearSimple` - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* `GetTeamsKeys` - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* `GetTeamsSimple` - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
