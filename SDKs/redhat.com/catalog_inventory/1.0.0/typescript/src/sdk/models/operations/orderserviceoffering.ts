import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrderServiceOfferingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OrderServiceOffering200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=task_id" })
  taskId?: string;
}


export class OrderServiceOfferingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrderServiceOfferingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.OrderParametersServiceOfferingInput;
}


export class OrderServiceOfferingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  orderServiceOffering200ApplicationJsonObject?: OrderServiceOffering200ApplicationJson;
}
