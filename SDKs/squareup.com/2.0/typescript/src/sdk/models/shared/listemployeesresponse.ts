import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Employee } from "./employee";
import { Error } from "./error";


export class ListEmployeesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=employees", elemType: shared.Employee })
  employees?: Employee[];

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
