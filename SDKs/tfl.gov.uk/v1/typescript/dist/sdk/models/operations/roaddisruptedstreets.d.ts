import { SpeakeasyBase } from "../../../internal/utils";
export declare class RoadDisruptedStreetsQueryParams extends SpeakeasyBase {
    endDate: Date;
    startDate: Date;
}
export declare class RoadDisruptedStreetsRequest extends SpeakeasyBase {
    queryParams: RoadDisruptedStreetsQueryParams;
}
export declare class RoadDisruptedStreetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
