import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdQueryParams extends SpeakeasyBase {
    deletionType?: string;
}
export declare class DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdRequest extends SpeakeasyBase {
    pathParams: DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams;
    queryParams: DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdQueryParams;
}
export declare class DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
