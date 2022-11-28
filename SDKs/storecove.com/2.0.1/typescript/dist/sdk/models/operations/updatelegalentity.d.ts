import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLegalEntityPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateLegalEntityRequest extends SpeakeasyBase {
    pathParams: UpdateLegalEntityPathParams;
    request: any;
}
export declare class UpdateLegalEntityResponse extends SpeakeasyBase {
    contentType: string;
    errorModels?: any[];
    legalEntity?: shared.LegalEntity;
    statusCode: number;
}
