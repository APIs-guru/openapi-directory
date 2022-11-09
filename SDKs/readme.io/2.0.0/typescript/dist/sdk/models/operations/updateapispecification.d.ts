import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateApiSpecificationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateApiSpecificationRequestBodySpec extends SpeakeasyBase {
    content: Uint8Array;
    spec: string;
}
export declare class UpdateApiSpecificationRequestBody extends SpeakeasyBase {
    spec?: UpdateApiSpecificationRequestBodySpec;
}
export declare class UpdateApiSpecificationSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UpdateApiSpecificationRequest extends SpeakeasyBase {
    pathParams: UpdateApiSpecificationPathParams;
    request: UpdateApiSpecificationRequestBody;
    security: UpdateApiSpecificationSecurity;
}
export declare class UpdateApiSpecificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
