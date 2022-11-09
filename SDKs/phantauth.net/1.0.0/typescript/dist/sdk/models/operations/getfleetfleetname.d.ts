import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetFleetFleetnamePathParams extends SpeakeasyBase {
    fleetname: string;
}
export declare class GetFleetFleetnameRequest extends SpeakeasyBase {
    pathParams: GetFleetFleetnamePathParams;
}
export declare class GetFleetFleetname200ApplicationJson extends SpeakeasyBase {
    atId?: string;
    logo?: string;
    logoEmail?: string;
    members?: any[];
    name?: string;
    profile?: string;
    sub: string;
}
export declare class GetFleetFleetnameResponse extends SpeakeasyBase {
    contentType: string;
    getFleetFleetname200ApplicationJsonObject?: GetFleetFleetname200ApplicationJson;
    statusCode: number;
}
