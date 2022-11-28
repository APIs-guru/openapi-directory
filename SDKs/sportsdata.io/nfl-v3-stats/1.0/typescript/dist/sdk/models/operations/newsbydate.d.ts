import { SpeakeasyBase } from "../../../internal/utils";
export declare class NewsByDatePathParams extends SpeakeasyBase {
    date: string;
    format: string;
}
export declare class NewsByDateRequest extends SpeakeasyBase {
    pathParams: NewsByDatePathParams;
}
export declare class NewsByDateResponse extends SpeakeasyBase {
    contentType: string;
    news?: any[];
    statusCode: number;
}
