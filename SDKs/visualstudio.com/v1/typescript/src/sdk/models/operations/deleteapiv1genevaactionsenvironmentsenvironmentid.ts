import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deletionType" })
  deletionType?: string;
}


export class DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdQueryParams;
}


export class DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
