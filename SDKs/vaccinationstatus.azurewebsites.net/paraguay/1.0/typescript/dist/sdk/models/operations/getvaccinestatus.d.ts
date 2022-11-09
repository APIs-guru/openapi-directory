import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetVaccineStatusHeaders extends SpeakeasyBase {
    accept: string;
    authorization: string;
    contentType: string;
}
export declare class GetVaccineStatusRequest extends SpeakeasyBase {
    headers: GetVaccineStatusHeaders;
    request: shared.VaccineStatusRequest;
}
export declare class GetVaccineStatusResponse extends SpeakeasyBase {
    contentType: string;
    problem?: shared.Problem;
    statusCode: number;
    vaccineResponse?: shared.VaccineResponse;
}
