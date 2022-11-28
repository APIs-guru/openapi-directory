import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRenderSecurity extends SpeakeasyBase {
    developerKey: shared.SchemeDeveloperKey;
}
export declare class PostRenderRequest extends SpeakeasyBase {
    request: shared.Edit;
    security: PostRenderSecurity;
}
export declare class PostRenderResponse extends SpeakeasyBase {
    contentType: string;
    queuedResponse?: shared.QueuedResponse;
    statusCode: number;
}
