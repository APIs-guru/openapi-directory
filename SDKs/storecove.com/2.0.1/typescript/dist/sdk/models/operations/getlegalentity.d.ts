import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLegalEntityPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetLegalEntityRequest extends SpeakeasyBase {
    pathParams: GetLegalEntityPathParams;
}
export declare class GetLegalEntityResponse extends SpeakeasyBase {
    contentType: string;
    legalEntity?: shared.LegalEntity;
    statusCode: number;
}
