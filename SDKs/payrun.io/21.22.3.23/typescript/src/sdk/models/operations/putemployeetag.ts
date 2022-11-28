import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutEmployeeTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" })
  tagId: string;
}


export class PutEmployeeTagHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutEmployeeTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEmployeeTagPathParams;

  @SpeakeasyMetadata()
  headers: PutEmployeeTagHeaders;
}


export class PutEmployeeTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tag?: shared.Tag;
}
