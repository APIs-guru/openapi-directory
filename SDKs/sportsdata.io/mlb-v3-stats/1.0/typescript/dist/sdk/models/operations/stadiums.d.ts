import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum StadiumsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class StadiumsPathParams extends SpeakeasyBase {
    format: StadiumsFormatEnum;
}
export declare class StadiumsRequest extends SpeakeasyBase {
    pathParams: StadiumsPathParams;
}
export declare class StadiumsResponse extends SpeakeasyBase {
    contentType: string;
    stadiums?: any[];
    statusCode: number;
}
