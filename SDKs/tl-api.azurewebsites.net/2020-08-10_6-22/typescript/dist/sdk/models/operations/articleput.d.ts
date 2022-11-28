import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticlePutRequest extends SpeakeasyBase {
    request: shared.ArticleDto;
}
export declare class ArticlePutResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;
    statusCode: number;
}
