import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCcLicensesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    creativeCommons?: shared.CreativeCommons[];
}
