import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ShowServicePlanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServicePlanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ShowServicePlanPathParams;
}


export class ShowServicePlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  servicePlan?: shared.ServicePlan;

  @Metadata()
  statusCode: number;
}
