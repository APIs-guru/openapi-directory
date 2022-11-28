import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetJournalLinesFromEmployeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetJournalLinesFromEmployeeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetJournalLinesFromEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJournalLinesFromEmployeePathParams;

  @SpeakeasyMetadata()
  headers: GetJournalLinesFromEmployeeHeaders;
}


export class GetJournalLinesFromEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  linkCollection?: shared.LinkCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
