import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPatientManagementPathParams extends SpeakeasyBase {
    groupId: number;
    identifierId: number;
    userId: number;
}
export declare class GetPatientManagementRequest extends SpeakeasyBase {
    pathParams: GetPatientManagementPathParams;
}
export declare class GetPatientManagementResponse extends SpeakeasyBase {
    contentType: string;
    patientManagement?: shared.PatientManagement;
    statusCode: number;
}
