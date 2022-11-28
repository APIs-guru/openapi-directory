import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAlertRequestBody extends SpeakeasyBase {
    search: string;
    types: string;
}
export declare class CreateAlertRequest extends SpeakeasyBase {
    request: CreateAlertRequestBody;
}
export declare class CreateAlertResponse extends SpeakeasyBase {
    alert?: shared.Alert;
    contentType: string;
    statusCode: number;
}
