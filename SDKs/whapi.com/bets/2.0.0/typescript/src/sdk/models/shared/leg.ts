import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Part } from "./part";


export class Leg extends SpeakeasyBase {
  @Metadata({ data: "json, name=parts", elemType: shared.Part })
  parts: Part[];

  @Metadata({ data: "json, name=sort" })
  sort?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
