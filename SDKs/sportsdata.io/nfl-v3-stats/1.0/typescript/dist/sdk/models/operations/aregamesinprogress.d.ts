import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AreGamesInProgressFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class AreGamesInProgressPathParams extends SpeakeasyBase {
    format: AreGamesInProgressFormatEnum;
}
export declare class AreGamesInProgressRequest extends SpeakeasyBase {
    pathParams: AreGamesInProgressPathParams;
}
export declare class AreGamesInProgressResponse extends SpeakeasyBase {
    areGamesInProgress200ApplicationJsonBoolean?: boolean;
    contentType: string;
    statusCode: number;
}
