import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutInstitutionsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutInstitutionsIdRequestBody extends SpeakeasyBase {
    currencyCode?: string;
    title?: string;
}
export declare class PutInstitutionsIdRequest extends SpeakeasyBase {
    pathParams: PutInstitutionsIdPathParams;
    request?: PutInstitutionsIdRequestBody;
}
export declare class PutInstitutionsIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    institution?: shared.Institution;
    statusCode: number;
}
