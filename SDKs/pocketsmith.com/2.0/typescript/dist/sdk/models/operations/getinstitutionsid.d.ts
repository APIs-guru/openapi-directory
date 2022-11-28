import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInstitutionsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetInstitutionsIdRequest extends SpeakeasyBase {
    pathParams: GetInstitutionsIdPathParams;
}
export declare class GetInstitutionsIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    institution?: shared.Institution;
    statusCode: number;
}
