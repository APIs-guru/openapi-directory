import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPostLocations200ApplicationJson extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
    name?: string;
}
export declare class GetPostLocationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPostLocations200ApplicationJsonObjects?: GetPostLocations200ApplicationJson[];
}
