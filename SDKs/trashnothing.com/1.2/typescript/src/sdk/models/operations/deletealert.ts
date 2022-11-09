import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAlertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alert_id" })
  alertId: string;
}


export class DeleteAlertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAlertPathParams;
}


export class DeleteAlertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
