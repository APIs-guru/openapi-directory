import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams;
}


export class GetApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  environmentStateChange?: shared.EnvironmentStateChange;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
