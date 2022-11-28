import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddOrUpdateEmergencyContactsPathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
}
export declare class AddOrUpdateEmergencyContactsSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class AddOrUpdateEmergencyContactsRequest extends SpeakeasyBase {
    pathParams: AddOrUpdateEmergencyContactsPathParams;
    request: shared.EmergencyContact;
    security: AddOrUpdateEmergencyContactsSecurity;
}
export declare class AddOrUpdateEmergencyContactsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
}
