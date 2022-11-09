import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBooks200ApplicationJson extends SpeakeasyBase {
    data?: shared.Book[];
}
export declare class GetBooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBooks200ApplicationJsonObject?: GetBooks200ApplicationJson;
}
