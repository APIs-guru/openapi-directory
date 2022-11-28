import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusCount } from "./statuscount";



export class PagingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "json, name=StatusCounts", elemType: StatusCount })
  statusCounts?: StatusCount[];

  @SpeakeasyMetadata({ data: "json, name=Take" })
  take?: number;

  @SpeakeasyMetadata({ data: "json, name=Total" })
  total?: number;
}
