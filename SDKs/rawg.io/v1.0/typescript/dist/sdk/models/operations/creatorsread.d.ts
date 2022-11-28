import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatorsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CreatorsReadRequest extends SpeakeasyBase {
    pathParams: CreatorsReadPathParams;
}
export declare class CreatorsReadResponse extends SpeakeasyBase {
    contentType: string;
    personSingle?: shared.PersonSingle;
    statusCode: number;
}
