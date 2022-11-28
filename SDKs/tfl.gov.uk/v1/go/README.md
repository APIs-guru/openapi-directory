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
    
    req := operations.AccidentStatsGetRequest{
        PathParams: operations.AccidentStatsGetPathParams{
            Year: 8018296780949623876,
        },
    }
    
    res, err := s.Sdk.AccidentStatsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesAccidentStatsAccidentDetails != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AccidentStatsGet` - Gets all accident details for accidents occuring in the specified year
* `AirQualityGet` - Gets air quality data feed
* `BikePointGet` - Gets the bike point with the given id.
* `BikePointGetAll` - Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.
* `BikePointSearch` - Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.
* `CabwiseGet` - Gets taxis and minicabs contact information
* `GetOccupancyCarPark` - Gets the occupancy for all car parks that have occupancy data
* `GetRoadIds` - Gets the road with the specified id (e.g. A1)
* `GetStopPointSearch` - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* `GetStopPointIDPlaceTypes` - Get a list of places corresponding to a given id and place types.
* `JourneyJourneyResults` - Perform a Journey Planner search from the parameters specified in simple types
* `JourneyMeta` - Gets a list of all of the available journey planner modes
* `LineArrivals` - Get the list of arrival predictions for given line ids based at the given stop
* `LineDisruption` - Get disruptions for the given line ids
* `LineDisruptionByMode` - Get disruptions for all lines of the given modes.
* `LineGet` - Gets lines that match the specified line ids.
* `LineGetByMode` - Gets lines that serve the given modes.
* `LineLineRoutesByIds` - Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.
* `LineMetaDisruptionCategories` - Gets a list of valid disruption categories
* `LineMetaModes` - Gets a list of valid modes
* `LineMetaServiceTypes` - Gets a list of valid ServiceTypes to filter on
* `LineMetaSeverity` - Gets a list of valid severity codes
* `LineRoute` - Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.
* `LineRouteByMode` - Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route
* `LineRouteSequence` - Gets all valid routes for given line id, including the sequence of stops on each route.
* `LineSearch` - Search for lines or routes matching the query string
* `LineStatus` - Gets the line status for given line ids during the provided dates e.g Minor Delays
* `LineStatusByIds` - Gets the line status of for given line ids e.g Minor Delays
* `LineStatusByMode` - Gets the line status of for all lines for the given modes
* `LineStatusBySeverity` - Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity
* `LineStopPoints` - Gets a list of the stations that serve the given line id
* `LineTimetable` - Gets the timetable for a specified station on the give line
* `LineTimetableTo` - Gets the timetable for a specified station on the give line with specified destination
* `ModeArrivals` - Gets the next arrival predictions for all stops of a given mode
* `ModeGetActiveServiceTypes` - Returns the service type active for a mode.
            Currently only supports tube
* `OccupancyGet` - Gets the occupancy for a car park with a given id
* `OccupancyGetAllChargeConnectorStatus` - Gets the occupancy for all charge connectors
* `OccupancyGetBikePointsOccupancies` - Get the occupancy for bike points.
* `OccupancyGetChargeConnectorStatus` - Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)
* `PlaceGet` - Gets the place with the given id.
* `PlaceGetAt` - Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
            must be polygonal e.g. a BoroughBoundary.
* `PlaceGetByGeo` - Gets the places that lie within a geographic region. The geographic region of interest can either be specified
            by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
            its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
            Optionally filters on type and can strip properties for a smaller payload.
* `PlaceGetByType` - Gets all places of a given type
* `PlaceGetOverlay` - Gets the place overlay for a given set of co-ordinates and a given width/height.
* `PlaceGetStreetsByPostCode` - Gets the set of streets associated with a post code.
* `PlaceMetaCategories` - Gets a list of all of the available place property categories and keys.
* `PlaceMetaPlaceTypes` - Gets a list of the available types of Place.
* `PlaceSearch` - Gets all places that matches the given query
* `RoadDisruptedStreets` - Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.
* `RoadDisruption` - Get active disruptions, filtered by road ids
* `RoadDisruptionByID` - Gets a list of active disruptions filtered by disruption Ids.
* `RoadGet` - Gets all roads managed by TfL
* `RoadMetaCategories` - Gets a list of valid RoadDisruption categories
* `RoadMetaSeverities` - Gets a list of valid RoadDisruption severity codes
* `RoadStatus` - Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
* `SearchBusSchedules` - Searches the bus schedules folder on S3 for a given bus number.
* `SearchGet` - Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.
* `SearchMetaCategories` - Gets the available search categories.
* `SearchMetaSearchProviders` - Gets the available searchProvider names.
* `SearchMetaSorts` - Gets the available sorting options.
* `StopPointArrivalDepartures` - Gets the list of arrival and departure predictions for the given stop point id (overground, tfl rail and thameslink only)
* `StopPointArrivals` - Gets the list of arrival predictions for the given stop point id
* `StopPointCrowding` - Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.
* `StopPointDirection` - Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.
* `StopPointDisruption` - Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
* `StopPointDisruptionByMode` - Gets a distinct list of disrupted stop points for the given modes
* `StopPointGet` - Gets a list of StopPoints corresponding to the given list of stop ids.
* `StopPointGetByGeoPoint` - Gets a list of StopPoints within {radius} by the specified criteria
* `StopPointGetByMode` - Gets a list of StopPoints filtered by the modes available at that StopPoint.
* `StopPointGetBySms` - Gets a StopPoint for a given sms code.
* `StopPointGetByType` - Gets all stop points of a given type
* `StopPointGetByTypeWithPagination` - Gets all the stop points of given type(s) with a page number
* `StopPointGetCarParksByID` - Get car parks corresponding to the given stop point id.
* `StopPointGetServiceTypes` - Gets the service types for a given stoppoint
* `StopPointGetTaxiRanksByIds` - Gets a list of taxi ranks corresponding to the given stop point id.
* `StopPointMetaCategories` - Gets the list of available StopPoint additional information categories
* `StopPointMetaModes` - Gets the list of available StopPoint modes
* `StopPointMetaStopTypes` - Gets the list of available StopPoint types
* `StopPointReachableFrom` - Gets Stopoints that are reachable from a station/line combination.
* `StopPointRoute` - Returns the route sections for all the lines that service the given stop point ids
* `StopPointSearch` - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* `TravelTimeGetCompareOverlay` - Gets the TravelTime overlay.
* `TravelTimeGetOverlay` - Gets the TravelTime overlay.
* `VehicleGet` - Gets the predictions for a given list of vehicle Id's.
* `VehicleGetEmissionsSurchargeCompliance` - Gets the Emissions Surcharge compliance for the Vehicle
* `VehicleGetUlezCompliance` - Gets the Ulez Surcharge compliance for the Vehicle

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
