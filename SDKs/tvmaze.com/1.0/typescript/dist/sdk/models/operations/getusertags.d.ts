import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tags?: shared.Tag[];
}
