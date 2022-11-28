import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiV1GenevaActionsConfigurationTargetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target" })
  target: string;
}


export class PostApiV1GenevaActionsConfigurationTargetRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updateSystemConfigurationBody?: shared.UpdateSystemConfigurationBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSystemConfigurationBody1?: shared.UpdateSystemConfigurationBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  updateSystemConfigurationBody2?: shared.UpdateSystemConfigurationBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateSystemConfigurationBody3?: shared.UpdateSystemConfigurationBody;
}


export class PostApiV1GenevaActionsConfigurationTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostApiV1GenevaActionsConfigurationTargetPathParams;

  @SpeakeasyMetadata()
  request: PostApiV1GenevaActionsConfigurationTargetRequests;
}


export class PostApiV1GenevaActionsConfigurationTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemConfigurationResponse?: shared.SystemConfigurationResponse;
}
