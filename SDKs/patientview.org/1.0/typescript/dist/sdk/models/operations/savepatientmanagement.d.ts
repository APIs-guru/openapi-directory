import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SavePatientManagementPathParams extends SpeakeasyBase {
    groupId: number;
    identifierId: number;
    userId: number;
}
export declare class SavePatientManagementRequest extends SpeakeasyBase {
    pathParams: SavePatientManagementPathParams;
    request?: shared.PatientManagement;
}
export declare class SavePatientManagementResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
