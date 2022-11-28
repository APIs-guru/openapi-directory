import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Part } from "./part";



export class Leg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parts", elemType: Part })
  parts: Part[];

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
