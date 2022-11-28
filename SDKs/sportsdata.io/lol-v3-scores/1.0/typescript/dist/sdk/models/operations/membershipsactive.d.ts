import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MembershipsActiveFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class MembershipsActivePathParams extends SpeakeasyBase {
    format: MembershipsActiveFormatEnum;
}
export declare class MembershipsActiveRequest extends SpeakeasyBase {
    pathParams: MembershipsActivePathParams;
}
export declare class MembershipsActiveResponse extends SpeakeasyBase {
    contentType: string;
    memberships?: any[];
    statusCode: number;
}
