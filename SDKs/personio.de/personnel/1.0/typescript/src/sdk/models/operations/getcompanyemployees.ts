import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCompanyEmployeesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  employeesResponse?: shared.EmployeesResponse;

  @Metadata()
  statusCode: number;
}
