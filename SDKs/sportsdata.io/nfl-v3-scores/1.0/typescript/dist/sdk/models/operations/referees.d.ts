import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RefereesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class RefereesPathParams extends SpeakeasyBase {
    format: RefereesFormatEnum;
}
export declare class RefereesRequest extends SpeakeasyBase {
    pathParams: RefereesPathParams;
}
export declare class RefereesResponse extends SpeakeasyBase {
    contentType: string;
    referees?: any[];
    statusCode: number;
}
