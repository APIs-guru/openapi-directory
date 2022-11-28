import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMessageAnnunciatorEnum {
    CommonsMain = "CommonsMain",
    LordsMain = "LordsMain",
    Security = "Security"
}
export declare class GetMessagePathParams extends SpeakeasyBase {
    annunciator: GetMessageAnnunciatorEnum;
}
export declare class GetMessageRequest extends SpeakeasyBase {
    pathParams: GetMessagePathParams;
}
export declare class GetMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    messageViewModel?: shared.MessageViewModel;
    statusCode: number;
}
