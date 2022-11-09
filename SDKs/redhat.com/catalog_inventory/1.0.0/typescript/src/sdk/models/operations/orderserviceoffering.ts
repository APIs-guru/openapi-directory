import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrderServiceOfferingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OrderServiceOfferingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrderServiceOfferingPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.OrderParametersServiceOffering;
}


export class OrderServiceOffering200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=task_id" })
  taskId?: string;
}


export class OrderServiceOfferingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  orderServiceOffering200ApplicationJsonObject?: OrderServiceOffering200ApplicationJson;
}
