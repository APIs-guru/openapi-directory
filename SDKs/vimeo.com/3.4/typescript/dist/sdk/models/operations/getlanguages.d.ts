import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLanguagesFilterEnum {
    Texttracks = "texttracks"
}
export declare class GetLanguagesQueryParams extends SpeakeasyBase {
    filter?: GetLanguagesFilterEnum;
}
export declare class GetLanguagesRequest extends SpeakeasyBase {
    queryParams: GetLanguagesQueryParams;
}
export declare class GetLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    languages?: shared.Language[];
}
