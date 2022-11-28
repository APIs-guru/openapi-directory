import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoryDocsPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class GetCategoryDocsHeaders extends SpeakeasyBase {
    xReadmeVersion: string;
}
export declare class GetCategoryDocsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetCategoryDocsRequest extends SpeakeasyBase {
    pathParams: GetCategoryDocsPathParams;
    headers: GetCategoryDocsHeaders;
    security: GetCategoryDocsSecurity;
}
export declare class GetCategoryDocsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
