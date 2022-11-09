import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeletePensionRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    pensionId: string;
}
export declare class DeletePensionRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePensionRevisionRequest extends SpeakeasyBase {
    pathParams: DeletePensionRevisionPathParams;
    headers: DeletePensionRevisionHeaders;
}
export declare class DeletePensionRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
