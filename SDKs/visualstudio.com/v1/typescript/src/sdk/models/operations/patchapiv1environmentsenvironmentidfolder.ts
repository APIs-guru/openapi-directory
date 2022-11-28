import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchApiV1EnvironmentsEnvironmentIdFolderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PatchApiV1EnvironmentsEnvironmentIdFolderRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  cloudEnvironmentFolderBody?: shared.CloudEnvironmentFolderBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  cloudEnvironmentFolderBody1?: shared.CloudEnvironmentFolderBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  cloudEnvironmentFolderBody2?: shared.CloudEnvironmentFolderBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  cloudEnvironmentFolderBody3?: shared.CloudEnvironmentFolderBody;
}


export class PatchApiV1EnvironmentsEnvironmentIdFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchApiV1EnvironmentsEnvironmentIdFolderPathParams;

  @SpeakeasyMetadata()
  request?: PatchApiV1EnvironmentsEnvironmentIdFolderRequests;
}


export class PatchApiV1EnvironmentsEnvironmentIdFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  cloudEnvironmentResult?: shared.CloudEnvironmentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageCodes?: number[];

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
