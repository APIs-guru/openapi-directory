import { SpeakeasyBase } from "../../../internal/utils";
export declare class SeasonUpcomingPathParams extends SpeakeasyBase {
    format: string;
}
export declare class SeasonUpcomingRequest extends SpeakeasyBase {
    pathParams: SeasonUpcomingPathParams;
}
export declare class SeasonUpcomingResponse extends SpeakeasyBase {
    contentType: string;
    seasonUpcoming200ApplicationJsonInteger?: number;
    statusCode: number;
}
