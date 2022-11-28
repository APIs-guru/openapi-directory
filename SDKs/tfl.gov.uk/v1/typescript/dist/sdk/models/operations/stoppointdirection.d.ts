import { SpeakeasyBase } from "../../../internal/utils";
export declare class StopPointDirectionPathParams extends SpeakeasyBase {
    id: string;
    toStopPointId: string;
}
export declare class StopPointDirectionQueryParams extends SpeakeasyBase {
    lineId?: string;
}
export declare class StopPointDirectionRequest extends SpeakeasyBase {
    pathParams: StopPointDirectionPathParams;
    queryParams: StopPointDirectionQueryParams;
}
export declare class StopPointDirectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stopPointDirection200ApplicationJsonString?: string;
    stopPointDirection200ApplicationXmlString?: string;
    stopPointDirection200TextJsonString?: string;
    stopPointDirection200TextXmlString?: string;
}
