import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deletionType" })
  deletionType?: string;
}


export class DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams;

  @Metadata()
  queryParams: DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdQueryParams;
}


export class DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
