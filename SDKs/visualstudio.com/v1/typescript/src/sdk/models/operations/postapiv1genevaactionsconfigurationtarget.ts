import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1GenevaActionsConfigurationTargetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=target" })
  target: string;
}


export class PostApiV1GenevaActionsConfigurationTargetRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updateSystemConfigurationBody?: shared.UpdateSystemConfigurationBody;

  @Metadata({ data: "request, media_type=application/json" })
  updateSystemConfigurationBody1?: shared.UpdateSystemConfigurationBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  updateSystemConfigurationBody2?: shared.UpdateSystemConfigurationBody;

  @Metadata({ data: "request, media_type=text/json" })
  updateSystemConfigurationBody3?: shared.UpdateSystemConfigurationBody;
}


export class PostApiV1GenevaActionsConfigurationTargetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostApiV1GenevaActionsConfigurationTargetPathParams;

  @Metadata()
  request: PostApiV1GenevaActionsConfigurationTargetRequests;
}


export class PostApiV1GenevaActionsConfigurationTargetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemConfigurationResponse?: shared.SystemConfigurationResponse;
}
