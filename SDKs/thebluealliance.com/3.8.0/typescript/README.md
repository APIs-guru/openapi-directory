# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { GetStatusRequest, GetStatusResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetStatusRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  headers: {
    ifModifiedSince: "officia",
  },
};

sdk.tba.getStatus(req).then((res: GetStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### TBA

* `getStatus` - Returns API status, and TBA status information.

### district

* `getDistrictEvents` - Gets a list of events in the given district.
* `getDistrictEventsKeys` - Gets a list of event keys for events in the given district.
* `getDistrictEventsSimple` - Gets a short-form list of events in the given district.
* `getDistrictRankings` - Gets a list of team district rankings for the given district.
* `getDistrictTeams` - Gets a list of `Team` objects that competed in events in the given district.
* `getDistrictTeamsKeys` - Gets a list of `Team` objects that competed in events in the given district.
* `getDistrictTeamsSimple` - Gets a short-form list of `Team` objects that competed in events in the given district.
* `getDistrictsByYear` - Gets a list of districts and their corresponding district key, for the given year.
* `getEventDistrictPoints` - Gets a list of team rankings for the Event.
* `getTeamDistricts` - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

### event

* `getDistrictEvents` - Gets a list of events in the given district.
* `getDistrictEventsKeys` - Gets a list of event keys for events in the given district.
* `getDistrictEventsSimple` - Gets a short-form list of events in the given district.
* `getEvent` - Gets an Event.
* `getEventAlliances` - Gets a list of Elimination Alliances for the given Event.
* `getEventAwards` - Gets a list of awards from the given event.
* `getEventDistrictPoints` - Gets a list of team rankings for the Event.
* `getEventInsights` - Gets a set of Event-specific insights for the given Event.
* `getEventMatchTimeseries` - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* `getEventMatches` - Gets a list of matches for the given event.
* `getEventMatchesKeys` - Gets a list of match keys for the given event.
* `getEventMatchesSimple` - Gets a short-form list of matches for the given event.
* `getEventOpRs` - Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.
* `getEventPredictions` - Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.
* `getEventRankings` - Gets a list of team rankings for the Event.
* `getEventSimple` - Gets a short-form Event.
* `getEventTeams` - Gets a list of `Team` objects that competed in the given event.
* `getEventTeamsKeys` - Gets a list of `Team` keys that competed in the given event.
* `getEventTeamsSimple` - Gets a short-form list of `Team` objects that competed in the given event.
* `getEventTeamsStatuses` - Gets a key-value list of the event statuses for teams competing at the given event.
* `getEventsByYear` - Gets a list of events in the given year.
* `getEventsByYearKeys` - Gets a list of event keys in the given year.
* `getEventsByYearSimple` - Gets a short-form list of events in the given year.
* `getTeamEventAwards` - Gets a list of awards the given team won at the given event.
* `getTeamEventMatches` - Gets a list of matches for the given team and event.
* `getTeamEventMatchesKeys` - Gets a list of match keys for matches for the given team and event.
* `getTeamEventMatchesSimple` - Gets a short-form list of matches for the given team and event.
* `getTeamEventStatus` - Gets the competition rank and status of the team at the given event.
* `getTeamEvents` - Gets a list of all events this team has competed at.
* `getTeamEventsByYear` - Gets a list of events this team has competed at in the given year.
* `getTeamEventsByYearKeys` - Gets a list of the event keys for events this team has competed at in the given year.
* `getTeamEventsByYearSimple` - Gets a short-form list of events this team has competed at in the given year.
* `getTeamEventsKeys` - Gets a list of the event keys for all events this team has competed at.
* `getTeamEventsSimple` - Gets a short-form list of all events this team has competed at.
* `getTeamEventsStatusesByYear` - Gets a key-value list of the event statuses for events this team has competed at in the given year.

### list

* `getDistrictEvents` - Gets a list of events in the given district.
* `getDistrictEventsKeys` - Gets a list of event keys for events in the given district.
* `getDistrictEventsSimple` - Gets a short-form list of events in the given district.
* `getDistrictRankings` - Gets a list of team district rankings for the given district.
* `getDistrictTeams` - Gets a list of `Team` objects that competed in events in the given district.
* `getDistrictTeamsKeys` - Gets a list of `Team` objects that competed in events in the given district.
* `getDistrictTeamsSimple` - Gets a short-form list of `Team` objects that competed in events in the given district.
* `getEventTeams` - Gets a list of `Team` objects that competed in the given event.
* `getEventTeamsKeys` - Gets a list of `Team` keys that competed in the given event.
* `getEventTeamsSimple` - Gets a short-form list of `Team` objects that competed in the given event.
* `getEventTeamsStatuses` - Gets a key-value list of the event statuses for teams competing at the given event.
* `getEventsByYear` - Gets a list of events in the given year.
* `getEventsByYearKeys` - Gets a list of event keys in the given year.
* `getEventsByYearSimple` - Gets a short-form list of events in the given year.
* `getTeamEventsStatusesByYear` - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* `getTeams` - Gets a list of `Team` objects, paginated in groups of 500.
* `getTeamsByYear` - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* `getTeamsByYearKeys` - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* `getTeamsByYearSimple` - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* `getTeamsKeys` - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* `getTeamsSimple` - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

### match

* `getEventMatchTimeseries` - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* `getEventMatches` - Gets a list of matches for the given event.
* `getEventMatchesKeys` - Gets a list of match keys for the given event.
* `getEventMatchesSimple` - Gets a short-form list of matches for the given event.
* `getMatch` - Gets a `Match` object for the given match key.
* `getMatchSimple` - Gets a short-form `Match` object for the given match key.
* `getMatchTimeseries` - Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* `getMatchZebra` - Gets Zebra MotionWorks data for a Match for the given match key.
* `getTeamEventMatches` - Gets a list of matches for the given team and event.
* `getTeamEventMatchesKeys` - Gets a list of match keys for matches for the given team and event.
* `getTeamEventMatchesSimple` - Gets a short-form list of matches for the given team and event.
* `getTeamMatchesByYear` - Gets a list of matches for the given team and year.
* `getTeamMatchesByYearKeys` - Gets a list of match keys for matches for the given team and year.
* `getTeamMatchesByYearSimple` - Gets a short-form list of matches for the given team and year.

### team

* `getDistrictRankings` - Gets a list of team district rankings for the given district.
* `getDistrictTeams` - Gets a list of `Team` objects that competed in events in the given district.
* `getDistrictTeamsKeys` - Gets a list of `Team` objects that competed in events in the given district.
* `getDistrictTeamsSimple` - Gets a short-form list of `Team` objects that competed in events in the given district.
* `getEventTeams` - Gets a list of `Team` objects that competed in the given event.
* `getEventTeamsKeys` - Gets a list of `Team` keys that competed in the given event.
* `getEventTeamsSimple` - Gets a short-form list of `Team` objects that competed in the given event.
* `getEventTeamsStatuses` - Gets a key-value list of the event statuses for teams competing at the given event.
* `getTeam` - Gets a `Team` object for the team referenced by the given key.
* `getTeamAwards` - Gets a list of awards the given team has won.
* `getTeamAwardsByYear` - Gets a list of awards the given team has won in a given year.
* `getTeamDistricts` - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
* `getTeamEventAwards` - Gets a list of awards the given team won at the given event.
* `getTeamEventMatches` - Gets a list of matches for the given team and event.
* `getTeamEventMatchesKeys` - Gets a list of match keys for matches for the given team and event.
* `getTeamEventMatchesSimple` - Gets a short-form list of matches for the given team and event.
* `getTeamEventStatus` - Gets the competition rank and status of the team at the given event.
* `getTeamEvents` - Gets a list of all events this team has competed at.
* `getTeamEventsByYear` - Gets a list of events this team has competed at in the given year.
* `getTeamEventsByYearKeys` - Gets a list of the event keys for events this team has competed at in the given year.
* `getTeamEventsByYearSimple` - Gets a short-form list of events this team has competed at in the given year.
* `getTeamEventsKeys` - Gets a list of the event keys for all events this team has competed at.
* `getTeamEventsSimple` - Gets a short-form list of all events this team has competed at.
* `getTeamEventsStatusesByYear` - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* `getTeamMatchesByYear` - Gets a list of matches for the given team and year.
* `getTeamMatchesByYearKeys` - Gets a list of match keys for matches for the given team and year.
* `getTeamMatchesByYearSimple` - Gets a short-form list of matches for the given team and year.
* `getTeamMediaByTag` - Gets a list of Media (videos / pictures) for the given team and tag.
* `getTeamMediaByTagYear` - Gets a list of Media (videos / pictures) for the given team, tag and year.
* `getTeamMediaByYear` - Gets a list of Media (videos / pictures) for the given team and year.
* `getTeamRobots` - Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
* `getTeamSimple` - Gets a `Team_Simple` object for the team referenced by the given key.
* `getTeamSocialMedia` - Gets a list of Media (social media) for the given team.
* `getTeamYearsParticipated` - Gets a list of years in which the team participated in at least one competition.
* `getTeams` - Gets a list of `Team` objects, paginated in groups of 500.
* `getTeamsByYear` - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* `getTeamsByYearKeys` - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* `getTeamsByYearSimple` - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* `getTeamsKeys` - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* `getTeamsSimple` - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
