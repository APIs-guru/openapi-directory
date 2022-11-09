import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum NewsByDateFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class NewsByDatePathParams extends SpeakeasyBase {
    date: string;
    format: NewsByDateFormatEnum;
}
export declare class NewsByDateRequest extends SpeakeasyBase {
    pathParams: NewsByDatePathParams;
}
export declare class NewsByDateResponse extends SpeakeasyBase {
    contentType: string;
    news?: any[];
    statusCode: number;
}
