import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StatusCount } from "./statuscount";


export class PagingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Skip" })
  skip?: number;

  @Metadata({ data: "json, name=StatusCounts", elemType: shared.StatusCount })
  statusCounts?: StatusCount[];

  @Metadata({ data: "json, name=Take" })
  take?: number;

  @Metadata({ data: "json, name=Total" })
  total?: number;
}
