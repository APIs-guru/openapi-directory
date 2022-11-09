import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEmployerJobsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetEmployerJobsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetEmployerJobsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEmployerJobsPathParams;

  @Metadata()
  headers: GetEmployerJobsHeaders;
}


export class GetEmployerJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getEmployerJobs200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
