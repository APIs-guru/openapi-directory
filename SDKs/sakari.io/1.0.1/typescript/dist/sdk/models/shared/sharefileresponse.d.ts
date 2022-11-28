import { SpeakeasyBase } from "../../../internal/utils";
export declare class ShareFileResponseData extends SpeakeasyBase {
    expires?: Date;
    link?: string;
}
export declare class ShareFileResponse extends SpeakeasyBase {
    data?: ShareFileResponseData;
    success?: boolean;
}
