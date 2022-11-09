import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteApiSpecificationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteApiSpecificationSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DeleteApiSpecificationRequest extends SpeakeasyBase {
    pathParams: DeleteApiSpecificationPathParams;
    security: DeleteApiSpecificationSecurity;
}
export declare class DeleteApiSpecificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
