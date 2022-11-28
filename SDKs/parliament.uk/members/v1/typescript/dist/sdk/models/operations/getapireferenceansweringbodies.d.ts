import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiReferenceAnsweringBodiesQueryParams extends SpeakeasyBase {
    id?: number;
    nameContains?: string;
}
export declare class GetApiReferenceAnsweringBodiesRequest extends SpeakeasyBase {
    queryParams: GetApiReferenceAnsweringBodiesQueryParams;
}
export declare class GetApiReferenceAnsweringBodiesResponse extends SpeakeasyBase {
    answeringBodies?: shared.AnsweringBody[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
