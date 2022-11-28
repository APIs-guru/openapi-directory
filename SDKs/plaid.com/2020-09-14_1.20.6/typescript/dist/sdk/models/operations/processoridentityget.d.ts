import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProcessorIdentityGetRequest extends SpeakeasyBase {
    request: shared.ProcessorIdentityGetRequest;
}
export declare class ProcessorIdentityGetResponse extends SpeakeasyBase {
    contentType: string;
    processorIdentityGetResponse?: Map<string, any>;
    statusCode: number;
}
