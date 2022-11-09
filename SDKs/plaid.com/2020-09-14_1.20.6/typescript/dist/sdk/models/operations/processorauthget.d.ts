import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProcessorAuthGetRequest extends SpeakeasyBase {
    request: shared.ProcessorAuthGetRequest;
}
export declare class ProcessorAuthGetResponse extends SpeakeasyBase {
    contentType: string;
    processorAuthGetResponse?: Map<string, any>;
    statusCode: number;
}
