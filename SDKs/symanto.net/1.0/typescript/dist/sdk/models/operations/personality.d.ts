import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PersonalityQueryParams extends SpeakeasyBase {
    all?: boolean;
}
export declare class PersonalityRequest extends SpeakeasyBase {
    queryParams: PersonalityQueryParams;
    request?: shared.Post[];
}
export declare class PersonalityResponse extends SpeakeasyBase {
    contentType: string;
    predictionResults?: shared.PostPredicted[];
    statusCode: number;
    validationErrors?: shared.ValidationErrors;
}
