import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchApiV1EnvironmentsEnvironmentIdFolderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PatchApiV1EnvironmentsEnvironmentIdFolderRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  cloudEnvironmentFolderBody?: shared.CloudEnvironmentFolderBody;

  @Metadata({ data: "request, media_type=application/json" })
  cloudEnvironmentFolderBody1?: shared.CloudEnvironmentFolderBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  cloudEnvironmentFolderBody2?: shared.CloudEnvironmentFolderBody;

  @Metadata({ data: "request, media_type=text/json" })
  cloudEnvironmentFolderBody3?: shared.CloudEnvironmentFolderBody;
}


export class PatchApiV1EnvironmentsEnvironmentIdFolderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchApiV1EnvironmentsEnvironmentIdFolderPathParams;

  @Metadata()
  request?: PatchApiV1EnvironmentsEnvironmentIdFolderRequests;
}


export class PatchApiV1EnvironmentsEnvironmentIdFolderResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  cloudEnvironmentResult?: shared.CloudEnvironmentResult;

  @Metadata()
  contentType: string;

  @Metadata()
  messageCodes?: number[];

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
