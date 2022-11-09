import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Employee } from "./employee";
import { Error } from "./error";


export class RetrieveEmployeeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=employee" })
  employee?: Employee;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
