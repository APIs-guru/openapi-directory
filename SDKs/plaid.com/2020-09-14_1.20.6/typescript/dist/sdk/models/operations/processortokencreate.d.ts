import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProcessorTokenCreateRequest extends SpeakeasyBase {
    request: shared.ProcessorTokenCreateRequest;
}
export declare class ProcessorTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    processorTokenCreateResponse?: Map<string, any>;
    statusCode: number;
}
