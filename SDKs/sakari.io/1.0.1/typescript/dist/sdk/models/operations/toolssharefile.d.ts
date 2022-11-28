import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolsShareFileMultipartFormDataMedia extends SpeakeasyBase {
    content: Uint8Array;
    media: string;
}
export declare class ToolsShareFileMultipartFormData extends SpeakeasyBase {
    media?: ToolsShareFileMultipartFormDataMedia;
}
export declare class ToolsShareFileRequests extends SpeakeasyBase {
    applicationOctetStream: Uint8Array;
    object?: ToolsShareFileMultipartFormData;
}
export declare class ToolsShareFileSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class ToolsShareFileRequest extends SpeakeasyBase {
    request: ToolsShareFileRequests;
    security: ToolsShareFileSecurity;
}
export declare class ToolsShareFileResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    shareFileResponse?: shared.ShareFileResponse;
    statusCode: number;
}
