import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum CanceledMembershipsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class CanceledMembershipsPathParams extends SpeakeasyBase {
    format: CanceledMembershipsFormatEnum;
}
export declare class CanceledMembershipsRequest extends SpeakeasyBase {
    pathParams: CanceledMembershipsPathParams;
}
export declare class CanceledMembershipsResponse extends SpeakeasyBase {
    canceledMembership?: any;
    contentType: string;
    statusCode: number;
}
