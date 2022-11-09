import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FindFormsQueryParams extends SpeakeasyBase {
    query?: string;
}
export declare class FindFormsSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class FindFormsRequest extends SpeakeasyBase {
    queryParams: FindFormsQueryParams;
    security: FindFormsSecurity;
}
export declare class FindForms200ApplicationJson extends SpeakeasyBase {
    data: any[];
}
export declare class FindFormsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    findForms200ApplicationJsonObject?: FindForms200ApplicationJson;
    findForms401ApplicationJsonAny?: any;
    findForms429ApplicationJsonAny?: any;
}
