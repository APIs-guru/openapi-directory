import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SavePatientManagementSurgeriesPathParams extends SpeakeasyBase {
    groupId: number;
    identifierId: number;
    userId: number;
}
export declare class SavePatientManagementSurgeriesRequest extends SpeakeasyBase {
    pathParams: SavePatientManagementSurgeriesPathParams;
    request?: shared.PatientManagement;
}
export declare class SavePatientManagementSurgeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
