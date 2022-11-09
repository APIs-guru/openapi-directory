import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MembershipsHistoricalFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class MembershipsHistoricalPathParams extends SpeakeasyBase {
    format: MembershipsHistoricalFormatEnum;
}
export declare class MembershipsHistoricalRequest extends SpeakeasyBase {
    pathParams: MembershipsHistoricalPathParams;
}
export declare class MembershipsHistoricalResponse extends SpeakeasyBase {
    contentType: string;
    memberships?: any[];
    statusCode: number;
}
