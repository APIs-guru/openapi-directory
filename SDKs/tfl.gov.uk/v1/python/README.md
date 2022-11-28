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
    
req = operations.AccidentStatsGetRequest(
    path_params=operations.AccidentStatsGetPathParams(
        year=8018296780949623876,
    ),
)
    
res = s.sdk.accident_stats_get(req)

if res.tfl_api_presentation_entities_accident_stats_accident_details is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `accident_stats_get` - Gets all accident details for accidents occuring in the specified year
* `air_quality_get` - Gets air quality data feed
* `bike_point_get` - Gets the bike point with the given id.
* `bike_point_get_all` - Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.
* `bike_point_search` - Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.
* `cabwise_get` - Gets taxis and minicabs contact information
* `get_occupancy_car_park` - Gets the occupancy for all car parks that have occupancy data
* `get_road_ids_` - Gets the road with the specified id (e.g. A1)
* `get_stop_point_search` - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* `get_stop_point_id_place_types` - Get a list of places corresponding to a given id and place types.
* `journey_journey_results` - Perform a Journey Planner search from the parameters specified in simple types
* `journey_meta` - Gets a list of all of the available journey planner modes
* `line_arrivals` - Get the list of arrival predictions for given line ids based at the given stop
* `line_disruption` - Get disruptions for the given line ids
* `line_disruption_by_mode` - Get disruptions for all lines of the given modes.
* `line_get` - Gets lines that match the specified line ids.
* `line_get_by_mode` - Gets lines that serve the given modes.
* `line_line_routes_by_ids` - Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.
* `line_meta_disruption_categories` - Gets a list of valid disruption categories
* `line_meta_modes` - Gets a list of valid modes
* `line_meta_service_types` - Gets a list of valid ServiceTypes to filter on
* `line_meta_severity` - Gets a list of valid severity codes
* `line_route` - Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.
* `line_route_by_mode` - Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route
* `line_route_sequence` - Gets all valid routes for given line id, including the sequence of stops on each route.
* `line_search` - Search for lines or routes matching the query string
* `line_status` - Gets the line status for given line ids during the provided dates e.g Minor Delays
* `line_status_by_ids` - Gets the line status of for given line ids e.g Minor Delays
* `line_status_by_mode` - Gets the line status of for all lines for the given modes
* `line_status_by_severity` - Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity
* `line_stop_points` - Gets a list of the stations that serve the given line id
* `line_timetable` - Gets the timetable for a specified station on the give line
* `line_timetable_to` - Gets the timetable for a specified station on the give line with specified destination
* `mode_arrivals` - Gets the next arrival predictions for all stops of a given mode
* `mode_get_active_service_types` - Returns the service type active for a mode.
            Currently only supports tube
* `occupancy_get` - Gets the occupancy for a car park with a given id
* `occupancy_get_all_charge_connector_status` - Gets the occupancy for all charge connectors
* `occupancy_get_bike_points_occupancies` - Get the occupancy for bike points.
* `occupancy_get_charge_connector_status` - Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)
* `place_get` - Gets the place with the given id.
* `place_get_at` - Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
            must be polygonal e.g. a BoroughBoundary.
* `place_get_by_geo` - Gets the places that lie within a geographic region. The geographic region of interest can either be specified
            by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
            its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
            Optionally filters on type and can strip properties for a smaller payload.
* `place_get_by_type` - Gets all places of a given type
* `place_get_overlay` - Gets the place overlay for a given set of co-ordinates and a given width/height.
* `place_get_streets_by_post_code` - Gets the set of streets associated with a post code.
* `place_meta_categories` - Gets a list of all of the available place property categories and keys.
* `place_meta_place_types` - Gets a list of the available types of Place.
* `place_search` - Gets all places that matches the given query
* `road_disrupted_streets` - Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.
* `road_disruption` - Get active disruptions, filtered by road ids
* `road_disruption_by_id` - Gets a list of active disruptions filtered by disruption Ids.
* `road_get` - Gets all roads managed by TfL
* `road_meta_categories` - Gets a list of valid RoadDisruption categories
* `road_meta_severities` - Gets a list of valid RoadDisruption severity codes
* `road_status` - Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
* `search_bus_schedules` - Searches the bus schedules folder on S3 for a given bus number.
* `search_get` - Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.
* `search_meta_categories` - Gets the available search categories.
* `search_meta_search_providers` - Gets the available searchProvider names.
* `search_meta_sorts` - Gets the available sorting options.
* `stop_point_arrival_departures` - Gets the list of arrival and departure predictions for the given stop point id (overground, tfl rail and thameslink only)
* `stop_point_arrivals` - Gets the list of arrival predictions for the given stop point id
* `stop_point_crowding` - Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.
* `stop_point_direction` - Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.
* `stop_point_disruption` - Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
* `stop_point_disruption_by_mode` - Gets a distinct list of disrupted stop points for the given modes
* `stop_point_get` - Gets a list of StopPoints corresponding to the given list of stop ids.
* `stop_point_get_by_geo_point` - Gets a list of StopPoints within {radius} by the specified criteria
* `stop_point_get_by_mode` - Gets a list of StopPoints filtered by the modes available at that StopPoint.
* `stop_point_get_by_sms` - Gets a StopPoint for a given sms code.
* `stop_point_get_by_type` - Gets all stop points of a given type
* `stop_point_get_by_type_with_pagination` - Gets all the stop points of given type(s) with a page number
* `stop_point_get_car_parks_by_id` - Get car parks corresponding to the given stop point id.
* `stop_point_get_service_types` - Gets the service types for a given stoppoint
* `stop_point_get_taxi_ranks_by_ids` - Gets a list of taxi ranks corresponding to the given stop point id.
* `stop_point_meta_categories` - Gets the list of available StopPoint additional information categories
* `stop_point_meta_modes` - Gets the list of available StopPoint modes
* `stop_point_meta_stop_types` - Gets the list of available StopPoint types
* `stop_point_reachable_from` - Gets Stopoints that are reachable from a station/line combination.
* `stop_point_route` - Returns the route sections for all the lines that service the given stop point ids
* `stop_point_search` - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* `travel_time_get_compare_overlay` - Gets the TravelTime overlay.
* `travel_time_get_overlay` - Gets the TravelTime overlay.
* `vehicle_get` - Gets the predictions for a given list of vehicle Id's.
* `vehicle_get_emissions_surcharge_compliance` - Gets the Emissions Surcharge compliance for the Vehicle
* `vehicle_get_ulez_compliance` - Gets the Ulez Surcharge compliance for the Vehicle

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
