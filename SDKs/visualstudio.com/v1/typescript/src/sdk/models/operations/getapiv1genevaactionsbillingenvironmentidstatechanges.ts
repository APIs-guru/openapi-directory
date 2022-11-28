import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams;
}


export class GetApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  environmentStateChange?: shared.EnvironmentStateChange;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
