import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class NewsByPlayerPathParams extends SpeakeasyBase {
    format: string;
    playerid: string;
}
export declare class NewsByPlayerRequest extends SpeakeasyBase {
    pathParams: NewsByPlayerPathParams;
}
export declare class NewsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    news?: any[];
    statusCode: number;
}
