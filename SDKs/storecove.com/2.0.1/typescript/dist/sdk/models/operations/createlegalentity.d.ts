import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLegalEntityRequest extends SpeakeasyBase {
    request: any;
}
export declare class CreateLegalEntityResponse extends SpeakeasyBase {
    contentType: string;
    errorModels?: any[];
    legalEntity?: shared.LegalEntity;
    statusCode: number;
}
