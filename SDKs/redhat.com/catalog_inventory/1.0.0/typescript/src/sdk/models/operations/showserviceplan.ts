import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ShowServicePlanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServicePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ShowServicePlanPathParams;
}


export class ShowServicePlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  servicePlan?: shared.ServicePlan;

  @SpeakeasyMetadata()
  statusCode: number;
}
