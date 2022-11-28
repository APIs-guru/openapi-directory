import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlertsResponse extends SpeakeasyBase {
    alerts?: shared.Alert[];
    contentType: string;
    statusCode: number;
}
