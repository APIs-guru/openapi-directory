import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1GenevaActionsConfigurationTargetKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target" })
  target: string;
}


export class GetApiV1GenevaActionsConfigurationTargetKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1GenevaActionsConfigurationTargetKeyPathParams;
}


export class GetApiV1GenevaActionsConfigurationTargetKeyResponse extends SpeakeasyBase {
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
