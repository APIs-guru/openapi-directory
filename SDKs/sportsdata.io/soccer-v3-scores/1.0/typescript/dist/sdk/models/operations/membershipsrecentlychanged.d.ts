import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MembershipsRecentlyChangedFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class MembershipsRecentlyChangedPathParams extends SpeakeasyBase {
    days: string;
    format: MembershipsRecentlyChangedFormatEnum;
}
export declare class MembershipsRecentlyChangedRequest extends SpeakeasyBase {
    pathParams: MembershipsRecentlyChangedPathParams;
}
export declare class MembershipsRecentlyChangedResponse extends SpeakeasyBase {
    contentType: string;
    memberships?: any[];
    statusCode: number;
}
