import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProcessorBankTransferCreateRequest extends SpeakeasyBase {
    request: shared.ProcessorBankTransferCreateRequest;
}
export declare class ProcessorBankTransferCreateResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    processorBankTransferCreateResponse?: Map<string, any>;
    statusCode: number;
}
