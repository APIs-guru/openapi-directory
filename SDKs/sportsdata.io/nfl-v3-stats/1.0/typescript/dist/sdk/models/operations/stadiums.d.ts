import { SpeakeasyBase } from "../../../internal/utils";
export declare class StadiumsPathParams extends SpeakeasyBase {
    format: string;
}
export declare class StadiumsRequest extends SpeakeasyBase {
    pathParams: StadiumsPathParams;
}
export declare class StadiumsResponse extends SpeakeasyBase {
    contentType: string;
    stadiums?: any[];
    statusCode: number;
}
