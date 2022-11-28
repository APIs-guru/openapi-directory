import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CommunicationQueryParams extends SpeakeasyBase {
    all?: boolean;
}
export declare class CommunicationRequest extends SpeakeasyBase {
    queryParams: CommunicationQueryParams;
    request?: shared.Post[];
}
export declare class CommunicationResponse extends SpeakeasyBase {
    contentType: string;
    predictionResults?: shared.PostPredicted[];
    statusCode: number;
    validationErrors?: shared.ValidationErrors;
}
