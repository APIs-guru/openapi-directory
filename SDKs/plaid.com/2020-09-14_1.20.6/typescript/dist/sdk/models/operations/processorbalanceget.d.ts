import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProcessorBalanceGetRequest extends SpeakeasyBase {
    request: shared.ProcessorBalanceGetRequest;
}
export declare class ProcessorBalanceGetResponse extends SpeakeasyBase {
    contentType: string;
    processorBalanceGetResponse?: Map<string, any>;
    statusCode: number;
}
