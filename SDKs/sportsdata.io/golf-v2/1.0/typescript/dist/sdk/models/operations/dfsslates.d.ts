import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DfsSlatesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class DfsSlatesPathParams extends SpeakeasyBase {
    format: DfsSlatesFormatEnum;
    tournamentid: string;
}
export declare class DfsSlatesRequest extends SpeakeasyBase {
    pathParams: DfsSlatesPathParams;
}
export declare class DfsSlatesResponse extends SpeakeasyBase {
    contentType: string;
    dfsSlates?: any[];
    statusCode: number;
}
