import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class InstitutionsGetRequest extends SpeakeasyBase {
    request: shared.InstitutionsGetRequest;
}
export declare class InstitutionsGetResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    institutionsGetResponse?: Map<string, any>;
    statusCode: number;
}
