import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlertsAlertIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class GetAlertsAlertIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAlertsAlertIdPathParams;
}


export class GetAlertsAlertIdResponse extends SpeakeasyBase {
  @Metadata()
  alertInfo?: shared.AlertInfo;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
