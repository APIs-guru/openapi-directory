import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportBehaviorSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ReportBehaviorRequest extends SpeakeasyBase {
    request: shared.CreateBehaviorInput;
    security: ReportBehaviorSecurity;
}
export declare class ReportBehaviorResponse extends SpeakeasyBase {
    behaviourOutput?: shared.BehaviourOutput;
    contentType: string;
    errors?: any[];
    statusCode: number;
}
