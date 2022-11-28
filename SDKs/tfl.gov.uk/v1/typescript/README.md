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
import { AccidentStatsGetRequest, AccidentStatsGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AccidentStatsGetRequest = {
  pathParams: {
    year: 8018296780949623876,
  },
};

sdk.sdk.accidentStatsGet(req).then((res: AccidentStatsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `accidentStatsGet` - Gets all accident details for accidents occuring in the specified year
* `airQualityGet` - Gets air quality data feed
* `bikePointGet` - Gets the bike point with the given id.
* `bikePointGetAll` - Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.
* `bikePointSearch` - Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.
* `cabwiseGet` - Gets taxis and minicabs contact information
* `getOccupancyCarPark` - Gets the occupancy for all car parks that have occupancy data
* `getRoadIds` - Gets the road with the specified id (e.g. A1)
* `getStopPointSearch` - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* `getStopPointIdPlaceTypes` - Get a list of places corresponding to a given id and place types.
* `journeyJourneyResults` - Perform a Journey Planner search from the parameters specified in simple types
* `journeyMeta` - Gets a list of all of the available journey planner modes
* `lineArrivals` - Get the list of arrival predictions for given line ids based at the given stop
* `lineDisruption` - Get disruptions for the given line ids
* `lineDisruptionByMode` - Get disruptions for all lines of the given modes.
* `lineGet` - Gets lines that match the specified line ids.
* `lineGetByMode` - Gets lines that serve the given modes.
* `lineLineRoutesByIds` - Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.
* `lineMetaDisruptionCategories` - Gets a list of valid disruption categories
* `lineMetaModes` - Gets a list of valid modes
* `lineMetaServiceTypes` - Gets a list of valid ServiceTypes to filter on
* `lineMetaSeverity` - Gets a list of valid severity codes
* `lineRoute` - Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.
* `lineRouteByMode` - Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route
* `lineRouteSequence` - Gets all valid routes for given line id, including the sequence of stops on each route.
* `lineSearch` - Search for lines or routes matching the query string
* `lineStatus` - Gets the line status for given line ids during the provided dates e.g Minor Delays
* `lineStatusByIds` - Gets the line status of for given line ids e.g Minor Delays
* `lineStatusByMode` - Gets the line status of for all lines for the given modes
* `lineStatusBySeverity` - Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity
* `lineStopPoints` - Gets a list of the stations that serve the given line id
* `lineTimetable` - Gets the timetable for a specified station on the give line
* `lineTimetableTo` - Gets the timetable for a specified station on the give line with specified destination
* `modeArrivals` - Gets the next arrival predictions for all stops of a given mode
* `modeGetActiveServiceTypes` - Returns the service type active for a mode.
            Currently only supports tube
* `occupancyGet` - Gets the occupancy for a car park with a given id
* `occupancyGetAllChargeConnectorStatus` - Gets the occupancy for all charge connectors
* `occupancyGetBikePointsOccupancies` - Get the occupancy for bike points.
* `occupancyGetChargeConnectorStatus` - Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)
* `placeGet` - Gets the place with the given id.
* `placeGetAt` - Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
            must be polygonal e.g. a BoroughBoundary.
* `placeGetByGeo` - Gets the places that lie within a geographic region. The geographic region of interest can either be specified
            by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
            its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
            Optionally filters on type and can strip properties for a smaller payload.
* `placeGetByType` - Gets all places of a given type
* `placeGetOverlay` - Gets the place overlay for a given set of co-ordinates and a given width/height.
* `placeGetStreetsByPostCode` - Gets the set of streets associated with a post code.
* `placeMetaCategories` - Gets a list of all of the available place property categories and keys.
* `placeMetaPlaceTypes` - Gets a list of the available types of Place.
* `placeSearch` - Gets all places that matches the given query
* `roadDisruptedStreets` - Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.
* `roadDisruption` - Get active disruptions, filtered by road ids
* `roadDisruptionById` - Gets a list of active disruptions filtered by disruption Ids.
* `roadGet` - Gets all roads managed by TfL
* `roadMetaCategories` - Gets a list of valid RoadDisruption categories
* `roadMetaSeverities` - Gets a list of valid RoadDisruption severity codes
* `roadStatus` - Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
* `searchBusSchedules` - Searches the bus schedules folder on S3 for a given bus number.
* `searchGet` - Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.
* `searchMetaCategories` - Gets the available search categories.
* `searchMetaSearchProviders` - Gets the available searchProvider names.
* `searchMetaSorts` - Gets the available sorting options.
* `stopPointArrivalDepartures` - Gets the list of arrival and departure predictions for the given stop point id (overground, tfl rail and thameslink only)
* `stopPointArrivals` - Gets the list of arrival predictions for the given stop point id
* `stopPointCrowding` - Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.
* `stopPointDirection` - Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.
* `stopPointDisruption` - Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
* `stopPointDisruptionByMode` - Gets a distinct list of disrupted stop points for the given modes
* `stopPointGet` - Gets a list of StopPoints corresponding to the given list of stop ids.
* `stopPointGetByGeoPoint` - Gets a list of StopPoints within {radius} by the specified criteria
* `stopPointGetByMode` - Gets a list of StopPoints filtered by the modes available at that StopPoint.
* `stopPointGetBySms` - Gets a StopPoint for a given sms code.
* `stopPointGetByType` - Gets all stop points of a given type
* `stopPointGetByTypeWithPagination` - Gets all the stop points of given type(s) with a page number
* `stopPointGetCarParksById` - Get car parks corresponding to the given stop point id.
* `stopPointGetServiceTypes` - Gets the service types for a given stoppoint
* `stopPointGetTaxiRanksByIds` - Gets a list of taxi ranks corresponding to the given stop point id.
* `stopPointMetaCategories` - Gets the list of available StopPoint additional information categories
* `stopPointMetaModes` - Gets the list of available StopPoint modes
* `stopPointMetaStopTypes` - Gets the list of available StopPoint types
* `stopPointReachableFrom` - Gets Stopoints that are reachable from a station/line combination.
* `stopPointRoute` - Returns the route sections for all the lines that service the given stop point ids
* `stopPointSearch` - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* `travelTimeGetCompareOverlay` - Gets the TravelTime overlay.
* `travelTimeGetOverlay` - Gets the TravelTime overlay.
* `vehicleGet` - Gets the predictions for a given list of vehicle Id's.
* `vehicleGetEmissionsSurchargeCompliance` - Gets the Emissions Surcharge compliance for the Vehicle
* `vehicleGetUlezCompliance` - Gets the Ulez Surcharge compliance for the Vehicle

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
