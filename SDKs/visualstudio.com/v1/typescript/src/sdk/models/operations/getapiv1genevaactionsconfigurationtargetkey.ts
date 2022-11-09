import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1GenevaActionsConfigurationTargetKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=target" })
  target: string;
}


export class GetApiV1GenevaActionsConfigurationTargetKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1GenevaActionsConfigurationTargetKeyPathParams;
}


export class GetApiV1GenevaActionsConfigurationTargetKeyResponse extends SpeakeasyBase {
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
