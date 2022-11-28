import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAlertPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alert_id" })
  alertId: string;
}


export class DeleteAlertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAlertPathParams;
}


export class DeleteAlertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
