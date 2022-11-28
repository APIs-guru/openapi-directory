import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.digital.tfl.gov.uk"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * accidentStatsGet - Gets all accident details for accidents occuring in the specified year
    **/
    accidentStatsGet(req: operations.AccidentStatsGetRequest, config?: AxiosRequestConfig): Promise<operations.AccidentStatsGetResponse>;
    /**
     * airQualityGet - Gets air quality data feed
    **/
    airQualityGet(config?: AxiosRequestConfig): Promise<operations.AirQualityGetResponse>;
    /**
     * bikePointGet - Gets the bike point with the given id.
    **/
    bikePointGet(req: operations.BikePointGetRequest, config?: AxiosRequestConfig): Promise<operations.BikePointGetResponse>;
    /**
     * bikePointGetAll - Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
     *             numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.
    **/
    bikePointGetAll(config?: AxiosRequestConfig): Promise<operations.BikePointGetAllResponse>;
    /**
     * bikePointSearch - Search for bike stations by their name, a bike point's name often contains information about the name of the street
     *             or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
     *             or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.
    **/
    bikePointSearch(req: operations.BikePointSearchRequest, config?: AxiosRequestConfig): Promise<operations.BikePointSearchResponse>;
    /**
     * cabwiseGet - Gets taxis and minicabs contact information
    **/
    cabwiseGet(req: operations.CabwiseGetRequest, config?: AxiosRequestConfig): Promise<operations.CabwiseGetResponse>;
    /**
     * getOccupancyCarPark - Gets the occupancy for all car parks that have occupancy data
    **/
    getOccupancyCarPark(config?: AxiosRequestConfig): Promise<operations.GetOccupancyCarParkResponse>;
    /**
     * getRoadIds - Gets the road with the specified id (e.g. A1)
    **/
    getRoadIds(req: operations.GetRoadIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetRoadIdsResponse>;
    /**
     * getStopPointSearch - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
    **/
    getStopPointSearch(req: operations.GetStopPointSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetStopPointSearchResponse>;
    /**
     * getStopPointIdPlaceTypes - Get a list of places corresponding to a given id and place types.
    **/
    getStopPointIdPlaceTypes(req: operations.GetStopPointIdPlaceTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetStopPointIdPlaceTypesResponse>;
    /**
     * journeyJourneyResults - Perform a Journey Planner search from the parameters specified in simple types
    **/
    journeyJourneyResults(req: operations.JourneyJourneyResultsRequest, config?: AxiosRequestConfig): Promise<operations.JourneyJourneyResultsResponse>;
    /**
     * journeyMeta - Gets a list of all of the available journey planner modes
    **/
    journeyMeta(config?: AxiosRequestConfig): Promise<operations.JourneyMetaResponse>;
    /**
     * lineArrivals - Get the list of arrival predictions for given line ids based at the given stop
    **/
    lineArrivals(req: operations.LineArrivalsRequest, config?: AxiosRequestConfig): Promise<operations.LineArrivalsResponse>;
    /**
     * lineDisruption - Get disruptions for the given line ids
    **/
    lineDisruption(req: operations.LineDisruptionRequest, config?: AxiosRequestConfig): Promise<operations.LineDisruptionResponse>;
    /**
     * lineDisruptionByMode - Get disruptions for all lines of the given modes.
    **/
    lineDisruptionByMode(req: operations.LineDisruptionByModeRequest, config?: AxiosRequestConfig): Promise<operations.LineDisruptionByModeResponse>;
    /**
     * lineGet - Gets lines that match the specified line ids.
    **/
    lineGet(req: operations.LineGetRequest, config?: AxiosRequestConfig): Promise<operations.LineGetResponse>;
    /**
     * lineGetByMode - Gets lines that serve the given modes.
    **/
    lineGetByMode(req: operations.LineGetByModeRequest, config?: AxiosRequestConfig): Promise<operations.LineGetByModeResponse>;
    /**
     * lineLineRoutesByIds - Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.
    **/
    lineLineRoutesByIds(req: operations.LineLineRoutesByIdsRequest, config?: AxiosRequestConfig): Promise<operations.LineLineRoutesByIdsResponse>;
    /**
     * lineMetaDisruptionCategories - Gets a list of valid disruption categories
    **/
    lineMetaDisruptionCategories(config?: AxiosRequestConfig): Promise<operations.LineMetaDisruptionCategoriesResponse>;
    /**
     * lineMetaModes - Gets a list of valid modes
    **/
    lineMetaModes(config?: AxiosRequestConfig): Promise<operations.LineMetaModesResponse>;
    /**
     * lineMetaServiceTypes - Gets a list of valid ServiceTypes to filter on
    **/
    lineMetaServiceTypes(config?: AxiosRequestConfig): Promise<operations.LineMetaServiceTypesResponse>;
    /**
     * lineMetaSeverity - Gets a list of valid severity codes
    **/
    lineMetaSeverity(config?: AxiosRequestConfig): Promise<operations.LineMetaSeverityResponse>;
    /**
     * lineRoute - Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.
    **/
    lineRoute(req: operations.LineRouteRequest, config?: AxiosRequestConfig): Promise<operations.LineRouteResponse>;
    /**
     * lineRouteByMode - Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route
    **/
    lineRouteByMode(req: operations.LineRouteByModeRequest, config?: AxiosRequestConfig): Promise<operations.LineRouteByModeResponse>;
    /**
     * lineRouteSequence - Gets all valid routes for given line id, including the sequence of stops on each route.
    **/
    lineRouteSequence(req: operations.LineRouteSequenceRequest, config?: AxiosRequestConfig): Promise<operations.LineRouteSequenceResponse>;
    /**
     * lineSearch - Search for lines or routes matching the query string
    **/
    lineSearch(req: operations.LineSearchRequest, config?: AxiosRequestConfig): Promise<operations.LineSearchResponse>;
    /**
     * lineStatus - Gets the line status for given line ids during the provided dates e.g Minor Delays
    **/
    lineStatus(req: operations.LineStatusRequest, config?: AxiosRequestConfig): Promise<operations.LineStatusResponse>;
    /**
     * lineStatusByIds - Gets the line status of for given line ids e.g Minor Delays
    **/
    lineStatusByIds(req: operations.LineStatusByIdsRequest, config?: AxiosRequestConfig): Promise<operations.LineStatusByIdsResponse>;
    /**
     * lineStatusByMode - Gets the line status of for all lines for the given modes
    **/
    lineStatusByMode(req: operations.LineStatusByModeRequest, config?: AxiosRequestConfig): Promise<operations.LineStatusByModeResponse>;
    /**
     * lineStatusBySeverity - Gets the line status for all lines with a given severity
     *             A list of valid severity codes can be obtained from a call to Line/Meta/Severity
    **/
    lineStatusBySeverity(req: operations.LineStatusBySeverityRequest, config?: AxiosRequestConfig): Promise<operations.LineStatusBySeverityResponse>;
    /**
     * lineStopPoints - Gets a list of the stations that serve the given line id
    **/
    lineStopPoints(req: operations.LineStopPointsRequest, config?: AxiosRequestConfig): Promise<operations.LineStopPointsResponse>;
    /**
     * lineTimetable - Gets the timetable for a specified station on the give line
    **/
    lineTimetable(req: operations.LineTimetableRequest, config?: AxiosRequestConfig): Promise<operations.LineTimetableResponse>;
    /**
     * lineTimetableTo - Gets the timetable for a specified station on the give line with specified destination
    **/
    lineTimetableTo(req: operations.LineTimetableToRequest, config?: AxiosRequestConfig): Promise<operations.LineTimetableToResponse>;
    /**
     * modeArrivals - Gets the next arrival predictions for all stops of a given mode
    **/
    modeArrivals(req: operations.ModeArrivalsRequest, config?: AxiosRequestConfig): Promise<operations.ModeArrivalsResponse>;
    /**
     * modeGetActiveServiceTypes - Returns the service type active for a mode.
     *             Currently only supports tube
    **/
    modeGetActiveServiceTypes(config?: AxiosRequestConfig): Promise<operations.ModeGetActiveServiceTypesResponse>;
    /**
     * occupancyGet - Gets the occupancy for a car park with a given id
    **/
    occupancyGet(req: operations.OccupancyGetRequest, config?: AxiosRequestConfig): Promise<operations.OccupancyGetResponse>;
    /**
     * occupancyGetAllChargeConnectorStatus - Gets the occupancy for all charge connectors
    **/
    occupancyGetAllChargeConnectorStatus(config?: AxiosRequestConfig): Promise<operations.OccupancyGetAllChargeConnectorStatusResponse>;
    /**
     * occupancyGetBikePointsOccupancies - Get the occupancy for bike points.
    **/
    occupancyGetBikePointsOccupancies(req: operations.OccupancyGetBikePointsOccupanciesRequest, config?: AxiosRequestConfig): Promise<operations.OccupancyGetBikePointsOccupanciesResponse>;
    /**
     * occupancyGetChargeConnectorStatus - Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)
    **/
    occupancyGetChargeConnectorStatus(req: operations.OccupancyGetChargeConnectorStatusRequest, config?: AxiosRequestConfig): Promise<operations.OccupancyGetChargeConnectorStatusResponse>;
    /**
     * placeGet - Gets the place with the given id.
    **/
    placeGet(req: operations.PlaceGetRequest, config?: AxiosRequestConfig): Promise<operations.PlaceGetResponse>;
    /**
     * placeGetAt - Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
     *             must be polygonal e.g. a BoroughBoundary.
    **/
    placeGetAt(req: operations.PlaceGetAtRequest, config?: AxiosRequestConfig): Promise<operations.PlaceGetAtResponse>;
    /**
     * placeGetByGeo - Gets the places that lie within a geographic region. The geographic region of interest can either be specified
     *             by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
     *             its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
     *             Optionally filters on type and can strip properties for a smaller payload.
    **/
    placeGetByGeo(req: operations.PlaceGetByGeoRequest, config?: AxiosRequestConfig): Promise<operations.PlaceGetByGeoResponse>;
    /**
     * placeGetByType - Gets all places of a given type
    **/
    placeGetByType(req: operations.PlaceGetByTypeRequest, config?: AxiosRequestConfig): Promise<operations.PlaceGetByTypeResponse>;
    /**
     * placeGetOverlay - Gets the place overlay for a given set of co-ordinates and a given width/height.
    **/
    placeGetOverlay(req: operations.PlaceGetOverlayRequest, config?: AxiosRequestConfig): Promise<operations.PlaceGetOverlayResponse>;
    /**
     * placeGetStreetsByPostCode - Gets the set of streets associated with a post code.
    **/
    placeGetStreetsByPostCode(req: operations.PlaceGetStreetsByPostCodeRequest, config?: AxiosRequestConfig): Promise<operations.PlaceGetStreetsByPostCodeResponse>;
    /**
     * placeMetaCategories - Gets a list of all of the available place property categories and keys.
    **/
    placeMetaCategories(config?: AxiosRequestConfig): Promise<operations.PlaceMetaCategoriesResponse>;
    /**
     * placeMetaPlaceTypes - Gets a list of the available types of Place.
    **/
    placeMetaPlaceTypes(config?: AxiosRequestConfig): Promise<operations.PlaceMetaPlaceTypesResponse>;
    /**
     * placeSearch - Gets all places that matches the given query
    **/
    placeSearch(req: operations.PlaceSearchRequest, config?: AxiosRequestConfig): Promise<operations.PlaceSearchResponse>;
    /**
     * roadDisruptedStreets - Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.
    **/
    roadDisruptedStreets(req: operations.RoadDisruptedStreetsRequest, config?: AxiosRequestConfig): Promise<operations.RoadDisruptedStreetsResponse>;
    /**
     * roadDisruption - Get active disruptions, filtered by road ids
    **/
    roadDisruption(req: operations.RoadDisruptionRequest, config?: AxiosRequestConfig): Promise<operations.RoadDisruptionResponse>;
    /**
     * roadDisruptionById - Gets a list of active disruptions filtered by disruption Ids.
    **/
    roadDisruptionById(req: operations.RoadDisruptionByIdRequest, config?: AxiosRequestConfig): Promise<operations.RoadDisruptionByIdResponse>;
    /**
     * roadGet - Gets all roads managed by TfL
    **/
    roadGet(config?: AxiosRequestConfig): Promise<operations.RoadGetResponse>;
    /**
     * roadMetaCategories - Gets a list of valid RoadDisruption categories
    **/
    roadMetaCategories(config?: AxiosRequestConfig): Promise<operations.RoadMetaCategoriesResponse>;
    /**
     * roadMetaSeverities - Gets a list of valid RoadDisruption severity codes
    **/
    roadMetaSeverities(config?: AxiosRequestConfig): Promise<operations.RoadMetaSeveritiesResponse>;
    /**
     * roadStatus - Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
    **/
    roadStatus(req: operations.RoadStatusRequest, config?: AxiosRequestConfig): Promise<operations.RoadStatusResponse>;
    /**
     * searchBusSchedules - Searches the bus schedules folder on S3 for a given bus number.
    **/
    searchBusSchedules(req: operations.SearchBusSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.SearchBusSchedulesResponse>;
    /**
     * searchGet - Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
     *             of 100. To return subsequent pages, use the paginated overload.
    **/
    searchGet(req: operations.SearchGetRequest, config?: AxiosRequestConfig): Promise<operations.SearchGetResponse>;
    /**
     * searchMetaCategories - Gets the available search categories.
    **/
    searchMetaCategories(config?: AxiosRequestConfig): Promise<operations.SearchMetaCategoriesResponse>;
    /**
     * searchMetaSearchProviders - Gets the available searchProvider names.
    **/
    searchMetaSearchProviders(config?: AxiosRequestConfig): Promise<operations.SearchMetaSearchProvidersResponse>;
    /**
     * searchMetaSorts - Gets the available sorting options.
    **/
    searchMetaSorts(config?: AxiosRequestConfig): Promise<operations.SearchMetaSortsResponse>;
    /**
     * stopPointArrivalDepartures - Gets the list of arrival and departure predictions for the given stop point id (overground, tfl rail and thameslink only)
    **/
    stopPointArrivalDepartures(req: operations.StopPointArrivalDeparturesRequest, config?: AxiosRequestConfig): Promise<operations.StopPointArrivalDeparturesResponse>;
    /**
     * stopPointArrivals - Gets the list of arrival predictions for the given stop point id
    **/
    stopPointArrivals(req: operations.StopPointArrivalsRequest, config?: AxiosRequestConfig): Promise<operations.StopPointArrivalsResponse>;
    /**
     * stopPointCrowding - Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.
    **/
    stopPointCrowding(req: operations.StopPointCrowdingRequest, config?: AxiosRequestConfig): Promise<operations.StopPointCrowdingResponse>;
    /**
     * stopPointDirection - Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.
    **/
    stopPointDirection(req: operations.StopPointDirectionRequest, config?: AxiosRequestConfig): Promise<operations.StopPointDirectionResponse>;
    /**
     * stopPointDisruption - Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
    **/
    stopPointDisruption(req: operations.StopPointDisruptionRequest, config?: AxiosRequestConfig): Promise<operations.StopPointDisruptionResponse>;
    /**
     * stopPointDisruptionByMode - Gets a distinct list of disrupted stop points for the given modes
    **/
    stopPointDisruptionByMode(req: operations.StopPointDisruptionByModeRequest, config?: AxiosRequestConfig): Promise<operations.StopPointDisruptionByModeResponse>;
    /**
     * stopPointGet - Gets a list of StopPoints corresponding to the given list of stop ids.
    **/
    stopPointGet(req: operations.StopPointGetRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetResponse>;
    /**
     * stopPointGetByGeoPoint - Gets a list of StopPoints within {radius} by the specified criteria
    **/
    stopPointGetByGeoPoint(req: operations.StopPointGetByGeoPointRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetByGeoPointResponse>;
    /**
     * stopPointGetByMode - Gets a list of StopPoints filtered by the modes available at that StopPoint.
    **/
    stopPointGetByMode(req: operations.StopPointGetByModeRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetByModeResponse>;
    /**
     * stopPointGetBySms - Gets a StopPoint for a given sms code.
    **/
    stopPointGetBySms(req: operations.StopPointGetBySmsRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetBySmsResponse>;
    /**
     * stopPointGetByType - Gets all stop points of a given type
    **/
    stopPointGetByType(req: operations.StopPointGetByTypeRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetByTypeResponse>;
    /**
     * stopPointGetByTypeWithPagination - Gets all the stop points of given type(s) with a page number
    **/
    stopPointGetByTypeWithPagination(req: operations.StopPointGetByTypeWithPaginationRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetByTypeWithPaginationResponse>;
    /**
     * stopPointGetCarParksById - Get car parks corresponding to the given stop point id.
    **/
    stopPointGetCarParksById(req: operations.StopPointGetCarParksByIdRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetCarParksByIdResponse>;
    /**
     * stopPointGetServiceTypes - Gets the service types for a given stoppoint
    **/
    stopPointGetServiceTypes(req: operations.StopPointGetServiceTypesRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetServiceTypesResponse>;
    /**
     * stopPointGetTaxiRanksByIds - Gets a list of taxi ranks corresponding to the given stop point id.
    **/
    stopPointGetTaxiRanksByIds(req: operations.StopPointGetTaxiRanksByIdsRequest, config?: AxiosRequestConfig): Promise<operations.StopPointGetTaxiRanksByIdsResponse>;
    /**
     * stopPointMetaCategories - Gets the list of available StopPoint additional information categories
    **/
    stopPointMetaCategories(config?: AxiosRequestConfig): Promise<operations.StopPointMetaCategoriesResponse>;
    /**
     * stopPointMetaModes - Gets the list of available StopPoint modes
    **/
    stopPointMetaModes(config?: AxiosRequestConfig): Promise<operations.StopPointMetaModesResponse>;
    /**
     * stopPointMetaStopTypes - Gets the list of available StopPoint types
    **/
    stopPointMetaStopTypes(config?: AxiosRequestConfig): Promise<operations.StopPointMetaStopTypesResponse>;
    /**
     * stopPointReachableFrom - Gets Stopoints that are reachable from a station/line combination.
    **/
    stopPointReachableFrom(req: operations.StopPointReachableFromRequest, config?: AxiosRequestConfig): Promise<operations.StopPointReachableFromResponse>;
    /**
     * stopPointRoute - Returns the route sections for all the lines that service the given stop point ids
    **/
    stopPointRoute(req: operations.StopPointRouteRequest, config?: AxiosRequestConfig): Promise<operations.StopPointRouteResponse>;
    /**
     * stopPointSearch - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
    **/
    stopPointSearch(req: operations.StopPointSearchRequest, config?: AxiosRequestConfig): Promise<operations.StopPointSearchResponse>;
    /**
     * travelTimeGetCompareOverlay - Gets the TravelTime overlay.
    **/
    travelTimeGetCompareOverlay(req: operations.TravelTimeGetCompareOverlayRequest, config?: AxiosRequestConfig): Promise<operations.TravelTimeGetCompareOverlayResponse>;
    /**
     * travelTimeGetOverlay - Gets the TravelTime overlay.
    **/
    travelTimeGetOverlay(req: operations.TravelTimeGetOverlayRequest, config?: AxiosRequestConfig): Promise<operations.TravelTimeGetOverlayResponse>;
    /**
     * vehicleGet - Gets the predictions for a given list of vehicle Id's.
    **/
    vehicleGet(req: operations.VehicleGetRequest, config?: AxiosRequestConfig): Promise<operations.VehicleGetResponse>;
    /**
     * vehicleGetEmissionsSurchargeCompliance - Gets the Emissions Surcharge compliance for the Vehicle
    **/
    vehicleGetEmissionsSurchargeCompliance(req: operations.VehicleGetEmissionsSurchargeComplianceRequest, config?: AxiosRequestConfig): Promise<operations.VehicleGetEmissionsSurchargeComplianceResponse>;
    /**
     * vehicleGetUlezCompliance - Gets the Ulez Surcharge compliance for the Vehicle
    **/
    vehicleGetUlezCompliance(req: operations.VehicleGetUlezComplianceRequest, config?: AxiosRequestConfig): Promise<operations.VehicleGetUlezComplianceResponse>;
}
export {};
