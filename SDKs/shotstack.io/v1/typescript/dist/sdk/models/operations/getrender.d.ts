import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRenderPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetRenderSecurity extends SpeakeasyBase {
    developerKey: shared.SchemeDeveloperKey;
}
export declare class GetRenderRequest extends SpeakeasyBase {
    pathParams: GetRenderPathParams;
    security: GetRenderSecurity;
}
export declare class GetRenderResponse extends SpeakeasyBase {
    contentType: string;
    renderResponse?: shared.RenderResponse;
    statusCode: number;
}
