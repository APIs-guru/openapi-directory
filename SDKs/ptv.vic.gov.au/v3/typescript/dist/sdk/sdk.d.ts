import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://timetableapi.ptv.vic.gov.au", "https://timetableapi.ptv.vic.gov.au"];
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
     * departuresGetForStop - View departures for all routes from a stop
    **/
    departuresGetForStop(req: operations.DeparturesGetForStopRequest, config?: AxiosRequestConfig): Promise<operations.DeparturesGetForStopResponse>;
    /**
     * departuresGetForStopAndRoute - View departures for a specific route from a stop
    **/
    departuresGetForStopAndRoute(req: operations.DeparturesGetForStopAndRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeparturesGetForStopAndRouteResponse>;
    /**
     * directionsForDirection - View all routes for a direction of travel
    **/
    directionsForDirection(req: operations.DirectionsForDirectionRequest, config?: AxiosRequestConfig): Promise<operations.DirectionsForDirectionResponse>;
    /**
     * directionsForDirectionAndType - View all routes of a particular type for a direction of travel
    **/
    directionsForDirectionAndType(req: operations.DirectionsForDirectionAndTypeRequest, config?: AxiosRequestConfig): Promise<operations.DirectionsForDirectionAndTypeResponse>;
    /**
     * directionsForRoute - View directions that a route travels in
    **/
    directionsForRoute(req: operations.DirectionsForRouteRequest, config?: AxiosRequestConfig): Promise<operations.DirectionsForRouteResponse>;
    /**
     * disruptionsGetAllDisruptions - View all disruptions for all route types
    **/
    disruptionsGetAllDisruptions(req: operations.DisruptionsGetAllDisruptionsRequest, config?: AxiosRequestConfig): Promise<operations.DisruptionsGetAllDisruptionsResponse>;
    /**
     * disruptionsGetDisruptionById - View a specific disruption
    **/
    disruptionsGetDisruptionById(req: operations.DisruptionsGetDisruptionByIdRequest, config?: AxiosRequestConfig): Promise<operations.DisruptionsGetDisruptionByIdResponse>;
    /**
     * disruptionsGetDisruptionModes - Get all disruption modes
    **/
    disruptionsGetDisruptionModes(req: operations.DisruptionsGetDisruptionModesRequest, config?: AxiosRequestConfig): Promise<operations.DisruptionsGetDisruptionModesResponse>;
    /**
     * disruptionsGetDisruptionsByRoute - View all disruptions for a particular route
    **/
    disruptionsGetDisruptionsByRoute(req: operations.DisruptionsGetDisruptionsByRouteRequest, config?: AxiosRequestConfig): Promise<operations.DisruptionsGetDisruptionsByRouteResponse>;
    /**
     * disruptionsGetDisruptionsByRouteAndStop - View all disruptions for a particular route and stop
    **/
    disruptionsGetDisruptionsByRouteAndStop(req: operations.DisruptionsGetDisruptionsByRouteAndStopRequest, config?: AxiosRequestConfig): Promise<operations.DisruptionsGetDisruptionsByRouteAndStopResponse>;
    /**
     * disruptionsGetDisruptionsByStop - View all disruptions for a particular stop
    **/
    disruptionsGetDisruptionsByStop(req: operations.DisruptionsGetDisruptionsByStopRequest, config?: AxiosRequestConfig): Promise<operations.DisruptionsGetDisruptionsByStopResponse>;
    /**
     * fareEstimateGetFareEstimateByZone - Estimate a fare by zone
    **/
    fareEstimateGetFareEstimateByZone(req: operations.FareEstimateGetFareEstimateByZoneRequest, config?: AxiosRequestConfig): Promise<operations.FareEstimateGetFareEstimateByZoneResponse>;
    /**
     * outletsGetAllOutlets - List all ticket outlets
    **/
    outletsGetAllOutlets(req: operations.OutletsGetAllOutletsRequest, config?: AxiosRequestConfig): Promise<operations.OutletsGetAllOutletsResponse>;
    /**
     * outletsGetOutletsByGeolocation - List ticket outlets near a specific location
    **/
    outletsGetOutletsByGeolocation(req: operations.OutletsGetOutletsByGeolocationRequest, config?: AxiosRequestConfig): Promise<operations.OutletsGetOutletsByGeolocationResponse>;
    /**
     * patternsGetPatternByRun - View the stopping pattern for a specific trip/service run
    **/
    patternsGetPatternByRun(req: operations.PatternsGetPatternByRunRequest, config?: AxiosRequestConfig): Promise<operations.PatternsGetPatternByRunResponse>;
    /**
     * routeTypesGetRouteTypes - View all route types and their names
    **/
    routeTypesGetRouteTypes(req: operations.RouteTypesGetRouteTypesRequest, config?: AxiosRequestConfig): Promise<operations.RouteTypesGetRouteTypesResponse>;
    /**
     * routesOneOrMoreRoutes - View route names and numbers for all routes
    **/
    routesOneOrMoreRoutes(req: operations.RoutesOneOrMoreRoutesRequest, config?: AxiosRequestConfig): Promise<operations.RoutesOneOrMoreRoutesResponse>;
    /**
     * routesRouteFromId - View route name and number for specific route ID
    **/
    routesRouteFromId(req: operations.RoutesRouteFromIdRequest, config?: AxiosRequestConfig): Promise<operations.RoutesRouteFromIdResponse>;
    /**
     * runsForRoute - View all trip/service runs for a specific route ID
    **/
    runsForRoute(req: operations.RunsForRouteRequest, config?: AxiosRequestConfig): Promise<operations.RunsForRouteResponse>;
    /**
     * runsForRouteAndRouteType - View all trip/service runs for a specific route ID and route type
    **/
    runsForRouteAndRouteType(req: operations.RunsForRouteAndRouteTypeRequest, config?: AxiosRequestConfig): Promise<operations.RunsForRouteAndRouteTypeResponse>;
    /**
     * runsForRun - View all trip/service runs for a specific run_ref
    **/
    runsForRun(req: operations.RunsForRunRequest, config?: AxiosRequestConfig): Promise<operations.RunsForRunResponse>;
    /**
     * runsForRunAndRouteType - View the trip/service run for a specific run_ref and route type
    **/
    runsForRunAndRouteType(req: operations.RunsForRunAndRouteTypeRequest, config?: AxiosRequestConfig): Promise<operations.RunsForRunAndRouteTypeResponse>;
    /**
     * searchSearch - View stops, routes and myki ticket outlets that match the search term
    **/
    searchSearch(req: operations.SearchSearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchSearchResponse>;
    /**
     * stopsStopDetails - View facilities at a specific stop (Metro and V/Line stations only)
    **/
    stopsStopDetails(req: operations.StopsStopDetailsRequest, config?: AxiosRequestConfig): Promise<operations.StopsStopDetailsResponse>;
    /**
     * stopsStopsByGeolocation - View all stops near a specific location
    **/
    stopsStopsByGeolocation(req: operations.StopsStopsByGeolocationRequest, config?: AxiosRequestConfig): Promise<operations.StopsStopsByGeolocationResponse>;
    /**
     * stopsStopsForRoute - View all stops on a specific route
    **/
    stopsStopsForRoute(req: operations.StopsStopsForRouteRequest, config?: AxiosRequestConfig): Promise<operations.StopsStopsForRouteResponse>;
}
export {};
