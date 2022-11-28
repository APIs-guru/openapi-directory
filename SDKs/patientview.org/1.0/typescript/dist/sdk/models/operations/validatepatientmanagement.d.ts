import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidatePatientManagementRequest extends SpeakeasyBase {
    request?: shared.PatientManagement;
}
export declare class ValidatePatientManagementResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
