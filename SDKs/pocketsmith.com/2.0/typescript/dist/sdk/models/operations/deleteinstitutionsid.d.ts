import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteInstitutionsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteInstitutionsIdRequest extends SpeakeasyBase {
    pathParams: DeleteInstitutionsIdPathParams;
}
export declare class DeleteInstitutionsIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
