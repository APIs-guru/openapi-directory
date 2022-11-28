import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectiveDetailsPathParams extends SpeakeasyBase {
    directiveId: string;
}
export declare enum DirectiveDetails200ApplicationJsonActionEnum {
    DirectiveDetails = "directiveDetails"
}
export declare class DirectiveDetails200ApplicationJsonData extends SpeakeasyBase {
    directives: shared.Directive[];
}
export declare enum DirectiveDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class DirectiveDetails200ApplicationJson extends SpeakeasyBase {
    action: DirectiveDetails200ApplicationJsonActionEnum;
    data: DirectiveDetails200ApplicationJsonData;
    result: DirectiveDetails200ApplicationJsonResultEnum;
}
export declare class DirectiveDetailsRequest extends SpeakeasyBase {
    pathParams: DirectiveDetailsPathParams;
}
export declare class DirectiveDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    directiveDetails200ApplicationJsonObject?: DirectiveDetails200ApplicationJson;
}
