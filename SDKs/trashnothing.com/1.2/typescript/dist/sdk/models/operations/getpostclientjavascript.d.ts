import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPostClientJavascriptQueryParams extends SpeakeasyBase {
    accessToken: string;
    callback?: string;
    groupIds: string;
}
export declare class GetPostClientJavascriptRequest extends SpeakeasyBase {
    queryParams: GetPostClientJavascriptQueryParams;
}
export declare class GetPostClientJavascriptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
