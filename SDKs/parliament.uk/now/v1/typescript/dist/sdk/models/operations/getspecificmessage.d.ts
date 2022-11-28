import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSpecificMessageAnnunciatorEnum {
    CommonsMain = "CommonsMain",
    LordsMain = "LordsMain",
    Security = "Security"
}
export declare class GetSpecificMessagePathParams extends SpeakeasyBase {
    annunciator: GetSpecificMessageAnnunciatorEnum;
    date: Date;
}
export declare class GetSpecificMessageRequest extends SpeakeasyBase {
    pathParams: GetSpecificMessagePathParams;
}
export declare class GetSpecificMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    messageViewModel?: shared.MessageViewModel;
    statusCode: number;
}
