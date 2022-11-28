import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompanyEmployeesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeesResponse?: shared.EmployeesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
